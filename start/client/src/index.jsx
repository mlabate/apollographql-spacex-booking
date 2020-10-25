import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});
