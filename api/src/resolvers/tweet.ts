import { Arg, Ctx, ID, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { ApolloError } from "apollo-server-express";

import { Tweet } from "../types/Tweet";
import { IsAuth } from "../lib/isAuth";
import { Context } from "../context";

@Resolver(Tweet)
export class TweetResolver {
  @Mutation(() => Tweet)
  @UseMiddleware(IsAuth)
  async createTweet(
    @Arg("text") text: string,
    @Arg("parentId", () => ID, { nullable: true }) parentId: number,
    @Ctx() { prisma, req }: Context
  ): Promise<Tweet> {
    try {
      const tweet = await prisma.tweet.create({
        data: {
          text,
          creatorId: req.session.userId,
          parentId: +parentId || null,
        },
      });
      return tweet;
    } catch (e) {
      throw new ApolloError("Unable to reply");
    }
  }
}
