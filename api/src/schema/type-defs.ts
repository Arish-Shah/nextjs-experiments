import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    signup(input: SignupInput!): User!
    signin(username: String!, password: String!): User!
    signout: Boolean!
  }

  type User {
    id: ID!
    email: String!
    username: String!
    joined: Date!
  }

  input SignupInput {
    email: String!
    username: String!
    password: String!
  }

  scalar Date
`;
