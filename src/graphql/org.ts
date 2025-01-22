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

export const selectOrganizations = gql`
  query selectOrganizations($input: PageOrganizationInput) {
    pageOrganization(input: $input) {
      organizations {
        id
        name
      }
    }
  }
`

export const organization = gql`
  query GetOrganization($id: String!) {
    getOrganization(id: $id) {
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
`

export const updateOrganization = gql`
  mutation UpdateOrganization(
    $id: String!
    $input: MutationOrganizationInput!
  ) {
    updateOrganization(id: $id, input: $input) {
      id
    }
  }
`

export const createOrganization = gql`
  mutation CreateOrganization($input: MutationOrganizationInput!) {
    createOrganization(input: $input) {
      id
    }
  }
`

export const removeOrganization = gql`
  mutation RemoveOrganization($id: String!) {
    removeOrganization(id: $id)
  }
`

export const commitOrganization = gql`
  mutation CommitOrganization($input: MutationOrganizationInput!, $id: String) {
    commitOrganization(input: $input, id: $id) {
      id
    }
  }
`
