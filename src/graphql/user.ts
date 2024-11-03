import { gql } from '@apollo/client'

export const GetUsers = gql`
  query GetUsers {
    users {
      id
      name
      password
      account
      desc
      tel
      createTime
      updateTime
    }
  }
`

export const GetUser = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      name
      password
      account
      desc
      tel
      createTime
      updateTime
    }
  }
`

export const CreateUser = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

export const UpdateUser = gql`
  mutation UpdateUser($id: String!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`
