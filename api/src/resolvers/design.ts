import { FieldResolver, Mutation, Resolver, Root } from "type-graphql";

import { Design } from "../types/Design";

@Resolver(Design)
export class DesignResolver {
  @FieldResolver()
  image(@Root() parent: Design) {
    return process.env.URL + "/images/bg/" + parent.image;
  }
}
