import { makeExecutableSchema } from "apollo-server-express";

import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
