import { Field, ObjectType } from "type-graphql";

import { Tweet } from "./Tweet";

@ObjectType()
export class CheckUsernameResponse {
  @Field()
  message: string;

  @Field(() => Boolean, { nullable: true })
  success: boolean | null;
}

@ObjectType()
export class PaginatedTweets {
  @Field(() => [Tweet])
  tweets: Tweet[];

  @Field()
  hasMore: boolean;
}
