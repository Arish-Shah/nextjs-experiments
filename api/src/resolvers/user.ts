import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";

import { Context } from "../context";
import { User } from "../types/User";
import { PaginatedTweets } from "../types/Response";

@Resolver(User)
export class UserResolver {
  @FieldResolver()
  picture(@Root() parent: User) {
    return process.env.URL + "/images/profile/" + parent.picture;
  }

  @FieldResolver()
  design(@Root() parent: User, @Ctx() { prisma }: Context) {
    return prisma.design.findUnique({ where: { id: parent.designId } });
  }

  // @todo
  @FieldResolver(() => PaginatedTweets)
  async tweets() {}
}
