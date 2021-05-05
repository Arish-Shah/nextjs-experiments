import { AuthenticationError } from "apollo-server-errors";
import { Request } from "express";

export const getUserIdOrThrowError = (req: Request) => {
  const userId = req.session?.userId;
  if (!userId) {
    throw new AuthenticationError("Unauthenticated");
  }
  return userId;
};
