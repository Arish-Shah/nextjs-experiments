import { buildSchemaSync } from "type-graphql";

import { AuthResolver } from "./resolvers/auth";
import { UserResolver } from "./resolvers/user";
import { DesignResolver } from "./resolvers/design";

export const schema = buildSchemaSync({
  resolvers: [AuthResolver, UserResolver, DesignResolver],
  validate: false,
});
