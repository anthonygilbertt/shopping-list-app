/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      product
      description
      customer
      price
      coverImage
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product
        description
        customer
        price
        coverImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordersForCustomer = /* GraphQL */ `
  query OrdersForCustomer(
    $customer: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersForCustomer(
      customer: $customer
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        product
        description
        customer
        price
        coverImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
