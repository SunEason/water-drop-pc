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
    $commitCardId: String!
    $method: Method!
  ) {
    commitCard(input: $input, id: $commitCardId, method: $method) {
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
