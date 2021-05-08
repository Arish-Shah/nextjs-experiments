import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import session from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import cors from "cors";
import path from "path";
import "dotenv/config";

import prisma from "./lib/prisma";
import { schema } from "./schema";
import { context } from "./context";

const app = express();

app.use(express.static(path.join(__dirname, "static")));

app.use(
  session({
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 365 * 24 * 60 * 60 * 1000,
    },
    name: process.env.COOKIE_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET!,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

const server = new ApolloServer({
  schema,
  context,
  tracing: process.env.NODE_ENV === "development",
});

server.applyMiddleware({ app, cors: false });

app.listen(process.env.PORT, () => {
  console.log("🚀 Server running on http://localhost:4000/graphql");
});
