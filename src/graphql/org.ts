import { gql } from '@apollo/client'

export const pageOrganization = gql`
  query Organizations($input: PageOrganizationInput) {
    pageOrganization(input: $input) {
      pageInfo {
        current
        pageSize
        total
      }
      organizations {
        createTime
        updateTime
        id
        businessLicense
        identityCardFrontImg
        identityCardBackImg
        logo
        tags
        description
        name
        address
        longitude
        latitude
        tel
        frontImages {
          id
          url
          remark
        }
        roomImages {
          id
          url
          remark
        }
        otherImages {
          id
          url
          remark
        }
      }
    }
  }
`
