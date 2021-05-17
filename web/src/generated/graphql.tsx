import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CheckUsernameResponse = {
  __typename?: 'CheckUsernameResponse';
  message: Scalars['String'];
  success?: Maybe<Scalars['Boolean']>;
};


export type Design = {
  __typename?: 'Design';
  id: Scalars['ID'];
  image: Scalars['String'];
  background: Scalars['String'];
  text: Scalars['String'];
  links: Scalars['String'];
  sidebar: Scalars['String'];
  sidebarBorder: Scalars['String'];
  repeat: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: User;
  signup: User;
  signout: Scalars['Boolean'];
  createTweet: Tweet;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationCreateTweetArgs = {
  parentId?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
};

export type PaginatedTweets = {
  __typename?: 'PaginatedTweets';
  tweets: Array<Tweet>;
  hasMore: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  checkUsername: CheckUsernameResponse;
};


export type QueryCheckUsernameArgs = {
  username: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['ID'];
  text: Scalars['String'];
  creator: User;
  from: Scalars['String'];
  parent?: Maybe<Tweet>;
  createdAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  username: Scalars['String'];
  picture: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  language: Scalars['String'];
  createdAt: Scalars['DateTime'];
  design: Design;
  tweets: PaginatedTweets;
};

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'username'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  username
}
    `;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;