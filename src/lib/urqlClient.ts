import {createClient, debugExchange, cacheExchange, fetchExchange} from "urql";

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
  exchanges: [debugExchange, cacheExchange, fetchExchange],
  fetchOptions: {},
});

export default client;
