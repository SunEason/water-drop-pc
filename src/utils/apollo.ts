import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getCurrentOrg } from './org'

const httpsLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
})

const authLink = setContext((_, { headers }) => {
  const token =
    sessionStorage.getItem(import.meta.env.VITE_AUTH_TOKEN) ||
    localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      orgId: getCurrentOrg()?.value,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpsLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
})
