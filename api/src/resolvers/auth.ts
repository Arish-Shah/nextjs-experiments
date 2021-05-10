import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ApolloError, UserInputError } from "apollo-server-express";
import { hash, compare } from "bcryptjs";

import { Context } from "../context";
import { User } from "../types/User";
import { SignupInput } from "../types/Input";
import { validateSignup } from "../lib/validate";
import { CheckUsernameResponse } from "../types/Response";

@Resolver()
export class AuthResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req, prisma }: Context): Promise<User | null> {
    const id = req.session?.userId || 0;
    return prisma.user.findUnique({
      where: { id },
    });
  }

  @Query(() => CheckUsernameResponse)
  async checkUsername(
    @Arg("username") username: string,
    @Ctx() { prisma }: Context
  ): Promise<CheckUsernameResponse> {
    if (!username.trim()) {
      return {
        message: "Username can't be blank",
        success: null,
      };
    } else {
      const user = await prisma.user.findUnique({ where: { username } });
      return {
        message: !user ? "Available!" : "Not Available!",
        success: !user,
      };
    }
  }

  @Mutation(() => User)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req, prisma }: Context
  ): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) throw new ApolloError("Incorrect username or password");

    const valid = await compare(password, user.password);
    if (!valid) throw new ApolloError("Incorrect username or password");

    req.session.userId = user.id;
    return user;
  }

  @Mutation(() => User)
  async signup(
    @Arg("input") input: SignupInput,
    @Ctx() { req, prisma }: Context
  ): Promise<User> {
    const error = validateSignup(input);
    if (error) throw new UserInputError(error);

    try {
      const password = await hash(input.password, 10);
      const user = await prisma.user.create({
        data: { ...input, password },
      });
      req.session.userId = user.id;
      return user;
    } catch (e) {
      if (e.message.includes("Unique constraint"))
        throw new ApolloError("Email or Username already exists");
      throw e;
    }
  }

  @Mutation(() => Boolean)
  signout(@Ctx() { req, res }: Context): Promise<boolean> {
    return new Promise((resolve) => {
      return req.session?.destroy((err) => {
        if (err) {
          resolve(false);
        }
        res.clearCookie(process.env.COOKIE_NAME!);
        resolve(true);
      });
    });
  }
}
