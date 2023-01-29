import { builder } from "./builder";

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (_, { name }) => `hello ${name}`,
    }),
  }),
});

export const schema = builder.toSchema();
