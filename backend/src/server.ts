import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";

import { schema } from "./schema";
import { context } from "./context";

const main = async () => {
  const port = process.env.PORT || 4000;

  const server = new ApolloServer({
    schema: await schema,
    context,
  });

  const app = express();

  app.use(cookieParser());

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}/graphql`);
  });
};

main().catch(console.error);
