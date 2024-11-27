import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { AUTH_TOKEN, BASE_URL } from '../consts'

const httpsLink = createHttpLink({
  uri: BASE_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
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
