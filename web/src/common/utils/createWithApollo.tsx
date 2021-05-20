import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { NextPage, NextPageContext } from "next";
import App, { AppContext } from "next/app";
import Head from "next/head";
import React from "react";

let globalApolloClient: ApolloClient<NormalizedCacheObject> | null = null;

type WithApolloOptions = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  apolloState: NormalizedCacheObject;
};

type ContextWithApolloOptions = AppContext & {
  ctx: { apolloClient: WithApolloOptions["apolloClient"] };
} & NextPageContext &
  WithApolloOptions;

type ApolloClientParam =
  | ApolloClient<NormalizedCacheObject>
  | ((ctx?: NextPageContext) => ApolloClient<NormalizedCacheObject>);

export const initOnContext = (
  acp: ApolloClientParam,
  ctx: ContextWithApolloOptions
) => {
  const ac =
    typeof acp === "function"
      ? acp(ctx)
      : (acp as ApolloClient<NormalizedCacheObject>);
  const inAppContext = Boolean(ctx.ctx);

  if (process.env.NODE_ENV === "development") {
    if (inAppContext) {
      console.warn(
        "Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n" +
          "Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n"
      );
    }
  }

  const apolloClient =
    ctx.apolloClient ||
    initApolloClient(ac, ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);

  (
    apolloClient as ApolloClient<NormalizedCacheObject> & {
      toJSON: () => { [key: string]: any } | null;
    }
  ).toJSON = () => null;

  ctx.apolloClient = apolloClient;
  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};

const initApolloClient = (
  acp: ApolloClientParam,
  initialState: NormalizedCacheObject,
  ctx: NextPageContext | undefined
) => {
  const apolloClient =
    typeof acp === "function"
      ? acp(ctx)
      : (acp as ApolloClient<NormalizedCacheObject>);

  if (typeof window === "undefined") {
    return createApolloClient(apolloClient, initialState, ctx);
  }

  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(apolloClient, initialState, ctx);
  }

  return globalApolloClient;
};

export function createWithApollo<P, IP>(ac: ApolloClientParam) {
  return ({ ssr = false } = {}) =>
    (PageComponent: NextPage<P, IP>) => {
      const WithApollo = (pageProps: P & WithApolloOptions) => {
        let client: ApolloClient<NormalizedCacheObject>;
        if (pageProps.apolloClient) {
          client = pageProps.apolloClient;
        } else {
          client = initApolloClient(ac, pageProps.apolloState, undefined);
        }

        return (
          <ApolloProvider client={client}>
            <PageComponent {...pageProps} />
          </ApolloProvider>
        );
      };

      if (process.env.NODE_ENV !== "production") {
        const displayName =
          PageComponent.displayName || PageComponent.name || "Component";
        WithApollo.displayName = `withApollo(${displayName})`;
      }

      if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async (ctx: ContextWithApolloOptions) => {
          const inAppContext = Boolean(ctx.ctx);
          const { apolloClient } = initOnContext(ac, ctx);

          let pageProps = {};
          if (PageComponent.getInitialProps) {
            pageProps = await PageComponent.getInitialProps(ctx);
          } else if (inAppContext) {
            pageProps = await App.getInitialProps(ctx);
          }

          if (typeof window === "undefined") {
            const { AppTree } = ctx;
            if (ctx.res && ctx.res.writableEnded) {
              return pageProps;
            }

            if (ssr && AppTree) {
              try {
                const { getDataFromTree } = await import(
                  "@apollo/client/react/ssr"
                );

                let props;
                if (inAppContext) {
                  props = { ...pageProps, apolloClient };
                } else {
                  props = { pageProps: { ...pageProps, apolloClient } };
                }

                await getDataFromTree(<AppTree {...props} />);
              } catch (error) {
                console.error("Error while running `getDataFromTree`", error);
              }

              Head.rewind();
            }
          }

          return {
            ...pageProps,
            apolloState: apolloClient.cache.extract(),
            apolloClient: ctx.apolloClient,
          };
        };
      }

      return WithApollo;
    };
}

const createApolloClient = (
  acp: ApolloClientParam,
  initialState: NormalizedCacheObject,
  ctx: NextPageContext | undefined
) => {
  const apolloClient =
    typeof acp === "function"
      ? acp(ctx)
      : (acp as ApolloClient<NormalizedCacheObject>);
  (
    apolloClient as ApolloClient<NormalizedCacheObject> & {
      ssrMode: boolean;
    }
  ).ssrMode = Boolean(ctx);
  apolloClient.cache.restore(initialState);

  return apolloClient;
};
