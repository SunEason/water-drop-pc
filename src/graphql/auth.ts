import { gql } from '@apollo/client'

export const getMessage = gql`
  query SendMessage($tel: String!) {
    sendMessage(tel: $tel)
  }
`
