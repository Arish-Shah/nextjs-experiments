import { Request, Response } from "express";

interface ExpressContext {
  req: Request;
  res: Response;
}

export interface Context extends ExpressContext {}

export const createContext = (ctx: ExpressContext): Context => {
  return ctx;
};
