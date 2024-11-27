import { gql } from '@apollo/client'

export const getMessage = gql`
  mutation SendMessage($tel: String!) {
    sendMessage(tel: $tel)
  }
`

export const login = gql`
  mutation Login($tel: String!, $code: String!) {
    login(tel: $tel, code: $code) {
      success
      token
    }
  }
`
