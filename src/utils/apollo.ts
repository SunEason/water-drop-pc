import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  cache: new InMemoryCache(),
});
