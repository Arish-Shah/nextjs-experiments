import { ApolloError, UserInputError } from "apollo-server-express";
import { hash, compare } from "bcryptjs";

import { Context } from "../../context";
import { Resolvers } from "../../generated/graphql";
import { validateSignup } from "../../lib/validate";

export const UserResolver: Resolvers<Context> = {
  Query: {
    me: (_, __, { req, prisma }) => {
      // @ts-ignore
      const id = req.session.userId || "";
      return prisma.user.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    signin: async (_, { username, password }, { req, prisma }) => {
      const user = await prisma.user.findUnique({
        where: { username },
      });
      if (!user) throw new ApolloError("Incorrect username or password");

      const valid = await compare(password, user.password);
      if (!valid) throw new ApolloError("Incorrect username or password");

      // @ts-ignore
      req.session.userId = user.id;

      return user;
    },
    signup: async (_, { input }, { req, prisma }) => {
      const error = validateSignup(input);

      if (error) {
        throw new UserInputError(error);
      }

      try {
        const password = await hash(input.password, 10);

        const user = await prisma.user.create({
          data: { ...input, password },
        });
        // @ts-ignore
        req.session.userId = user.id;

        return user;
      } catch (e) {
        throw new ApolloError("User already exists");
      }
    },
    signout: (_, __, { req, res }) => {
      return new Promise((resolve) => {
        return req.session.destroy((err) => {
          if (err) {
            resolve(false);
          }
          res.clearCookie(process.env.COOKIE_NAME!);
          resolve(true);
        });
      });
    },
  },
};
