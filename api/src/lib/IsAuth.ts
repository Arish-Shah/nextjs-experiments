import { MiddlewareFn } from "type-graphql";
import { ApolloError } from "apollo-server-express";

import { Context } from "../context";

export const IsAuth: MiddlewareFn<Context> = ({ context }, next) => {
  if (!context.req.session?.userId) {
    throw new ApolloError("Unauthenticated");
  }
  return next();
};
