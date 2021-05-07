import { buildSchemaSync } from "type-graphql";

import { UserResolver } from "./resolvers/user";
import { DesignResolver } from "./resolvers/design";

export const schema = buildSchemaSync({
  resolvers: [UserResolver, DesignResolver],
  validate: false,
});
