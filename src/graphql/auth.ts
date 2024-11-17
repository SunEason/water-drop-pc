import { gql } from '@apollo/client'

export const getMessage = gql`
  query SendMessage($tel: String!) {
    sendMessage(tel: $tel)
  }
`

export const login = gql`
  query Login($tel: String!, $code: String!) {
    login(tel: $tel, code: $code)
  }
`
