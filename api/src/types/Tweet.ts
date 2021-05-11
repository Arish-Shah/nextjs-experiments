import { Field, ID, ObjectType } from "type-graphql";

import { User } from "./User";

@ObjectType()
export class Tweet {
  @Field(() => ID)
  id: number;

  @Field()
  text: string;

  @Field()
  creator?: User;
  creatorId: number;

  @Field()
  from: string;

  @Field({ nullable: true })
  parent?: Tweet;
  parentId: number | null;

  @Field()
  createdAt: Date;
}
