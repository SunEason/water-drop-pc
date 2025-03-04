import { gql } from '@apollo/client'

export const Cards = gql`
  query Cards($courseId: String!) {
    cards(courseId: $courseId) {
      id
      createTime
      updateTime
      name
      type
      times
      duration
    }
  }
`

export const CommitCard = gql`
  mutation CommitCard(
    $input: CardInput!
    $commitId: String!
    $method: Method!
  ) {
    commitCard(input: $input, id: $commitId, method: $method) {
      id
      createTime
      updateTime
      name
      type
      times
      duration
    }
  }
`

export const removeCard = gql`
  mutation RemoveCard($id: String!) {
    removeCard(id: $id)
  }
`
