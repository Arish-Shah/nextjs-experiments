import { Request, Response } from "express";

interface ExpressContext {
  req: Request;
  res: Response;
}

export interface Context extends ExpressContext {}

export const context = (ctx: ExpressContext): Context => {
  return ctx;
};
