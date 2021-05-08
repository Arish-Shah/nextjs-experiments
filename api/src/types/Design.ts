import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Design {
  @Field(() => ID)
  id: number;

  @Field()
  image: string;

  @Field()
  background: string;

  @Field()
  text: string;

  @Field()
  links: string;

  @Field()
  sidebar: string;

  @Field()
  sidebarBorder: string;

  @Field()
  repeat: boolean;
}
