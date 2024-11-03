import { gql } from '@apollo/client'

export const GetOSSInfo = gql`
  query GetOSSInfo {
    OSSInfo {
      expire
      policy
      signature
      accessId
      host
    }
  }
`
