import { ApolloError, UserInputError } from "apollo-server-express";

import { Context } from "../../context";
import { Resolvers } from "../../generated/graphql";
import { getUserIdOrThrowError } from "../../lib/auth";
import { validateTweet } from "../../lib/validate";

export const TweetResolver: Resolvers<Context> = {
  Tweet: {
    creator: ({ creatorId }, _, { prisma }) =>
      prisma.user.findUnique({ where: { id: creatorId } }),
  },
  Mutation: {
    createTweet: (_, { text }, { req, prisma }) => {
      const creatorId = getUserIdOrThrowError(req);
      const error = validateTweet(text);
      if (error) throw new UserInputError(error);
      return prisma.tweet.create({
        data: { text, creatorId },
      });
    },
    deleteTweet: async (_, { tweetId }, { req, prisma }) => {
      const creatorId = getUserIdOrThrowError(req);
      const tweet = await prisma.tweet.findUnique({ where: { id: tweetId } });
      if (!tweet) throw new ApolloError("Tweet not found");
      if (tweet.creatorId !== creatorId)
        throw new ApolloError("Unable to delete");

      await prisma.tweet.delete({
        where: { id: tweetId },
      });
      return true;
    },
  },
};
