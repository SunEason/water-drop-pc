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

export const GetUserInfo = gql`
  query GetUserInfo {
    getUserInfo {
      id
      name
      password
      tel
      desc
      account
      avatar
      createTime
      updateTime
    }
  }
`

export const UpdateUserInfo = gql`
  mutation UpdateUserInfo($id: String!, $input: UserUpdateInput!) {
    updateUserInfo(id: $id, input: $input) {
      id
      name
      password
      tel
      desc
      account
      avatar
      createTime
      updateTime
    }
  }
`
