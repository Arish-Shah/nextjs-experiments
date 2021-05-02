import { buildSchema } from "type-graphql";

import { UserResolver } from "./resolvers/user";

export const schema = buildSchema({
  resolvers: [UserResolver],
  emitSchemaFile: true,
});
