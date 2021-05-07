import { Field, ID, ObjectType } from "type-graphql";

import { Design } from "./Design";

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  picture: string;

  @Field(() => String, { nullable: true })
  name: string | null;

  @Field(() => String, { nullable: true })
  web: string | null;

  @Field(() => String, { nullable: true })
  bio: string | null;

  @Field(() => String, { nullable: true })
  location: string | null;

  @Field()
  language: string;

  @Field()
  createdAt: Date;

  @Field()
  design?: Design;
  designId: number;
}
