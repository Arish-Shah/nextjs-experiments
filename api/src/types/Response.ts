import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CheckUsernameResponse {
  @Field()
  message: string;

  @Field(() => Boolean, { nullable: true })
  success: boolean | null;
}
