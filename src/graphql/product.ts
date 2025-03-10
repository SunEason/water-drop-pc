import { gql } from '@apollo/client'

export const pageProduct = gql`
  query PageProduct($input: PageProductInput) {
    pageProduct(input: $input) {
      products {
        bannerUrl
        buyNumber
        name
        id
        coverUrl
        createTime
        curStock
        desc
        limitBuyNumber
        originalPrice
        preferentialPrice
        status
        stock
        type
        updateTime
        cards {
          name
        }
      }
      pageInfo {
        current
        pageSize
        total
      }
    }
  }
`

export const getProduct = gql`
  query Product($id: String!) {
    product(id: $id) {
      id
      createTime
      updateTime
      name
      desc
      type
      status
      stock
      curStock
      buyNumber
      limitBuyNumber
      coverUrl
      bannerUrl
      originalPrice
      preferentialPrice
      cards {
        name
      }
    }
  }
`

export const commitProduct = gql`
  mutation CommitProduct($input: ProductInput!, $commitId: String) {
    commitProduct(input: $input, id: $commitId) {
      id
      createTime
      updateTime
      name
      desc
      type
      status
      stock
      curStock
      buyNumber
      limitBuyNumber
      coverUrl
      bannerUrl
      originalPrice
      preferentialPrice
      org {
        id
      }
      cards {
        id
        createTime
        updateTime
        name
        type
        times
        duration
      }
    }
  }
`

export const removeProduct = gql`
  mutation RemoveProduct($id: String!) {
    removeProduct(id: $id)
  }
`
