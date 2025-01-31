import { gql } from '@apollo/client'

export const pageCourse = gql`
  query PageCourse($input: PageCourseInput) {
    pageCourse(input: $input) {
      pageInfo {
        current
        pageSize
        total
      }
      courses {
        id
        createTime
        updateTime
        deletedAt
        name
        group
        baseAbility
        limitNumber
        desc
        reserveInfo
        refundInfo
        otherInfo
        duration
      }
    }
  }
`

export const getCourse = gql`
  query GetCourse($id: String!) {
    getCourse(id: $id) {
      id
      createTime
      updateTime
      deletedAt
      name
      group
      baseAbility
      limitNumber
      desc
      reserveInfo
      refundInfo
      otherInfo
      duration
    }
  }
`

export const commitCourse = gql`
  mutation CommitCourse($input: MutationCourseInput!, $id: String) {
    commitCourse(input: $input, id: $id) {
      id
      createTime
      updateTime
      deletedAt
      name
      group
      baseAbility
      limitNumber
      desc
      reserveInfo
      refundInfo
      otherInfo
    }
  }
`
