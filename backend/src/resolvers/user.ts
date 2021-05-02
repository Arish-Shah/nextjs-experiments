import { Ctx, Query, Resolver } from "type-graphql";

import { Context } from "../context";

@Resolver()
export class UserResolver {
  @Query()
  hi(@Ctx() { req }: Context): string {
    console.log(req.cookies);
    return "hey!";
  }
}
