import { buildSchemaSync } from "type-graphql";

import { AuthResolver } from "./resolvers/auth";
import { UserResolver } from "./resolvers/user";
import { DesignResolver } from "./resolvers/design";
import { TweetResolver } from "./resolvers/tweet";

export const schema = buildSchemaSync({
  resolvers: [AuthResolver, UserResolver, DesignResolver, TweetResolver],
  validate: false,
  emitSchemaFile: true,
});
