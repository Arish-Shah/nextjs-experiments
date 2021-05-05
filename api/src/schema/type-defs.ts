import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    signup(input: SignupInput!): User!
    signin(username: String!, password: String!): User!
    signout: Boolean!
    createTweet(text: String!): Tweet!
    deleteTweet(tweetId: ID!): Boolean!
  }

  type User {
    id: ID!
    email: String!
    username: String!
    tweets(input: PaginationInput!): TweetResponse
    createdAt: Date!
  }

  type Tweet {
    id: ID!
    text: String!
    creatorId: String!
    creator: User
    createdAt: Date!
  }

  type TweetResponse {
    tweets: [Tweet!]!
    hasMore: Boolean!
  }

  input SignupInput {
    email: String!
    username: String!
    password: String!
  }

  input PaginationInput {
    take: Int!
    cursor: ID
  }

  scalar Date
`;
