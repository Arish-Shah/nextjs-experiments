import { schema } from "@/graphql/schema";
import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const handler = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
  graphiql: process.env.NODE_ENV === "development",
});

export default handler;
