import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

import prisma from "./lib/prisma";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

interface ExpressContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
}

export interface Context extends ExpressContext {}

export const context = ({ req, res }: ExpressContext): Context => {
  return {
    req,
    res,
    prisma,
  };
};
