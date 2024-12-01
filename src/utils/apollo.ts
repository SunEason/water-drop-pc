import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpsLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
})

console.log(import.meta.env)
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpsLink),
  cache: new InMemoryCache(),
})
