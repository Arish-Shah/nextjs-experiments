import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./resolvers/user";

const main = async () => {
  const port = process.env.PORT || 4000;

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  const app = express();

  app.use(cookieParser());

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}/graphql`);
  });
};

main().catch(console.error);
