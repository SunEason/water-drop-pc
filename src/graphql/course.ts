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
      }
    }
  }
`
