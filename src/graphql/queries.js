/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSqlQuery = /* GraphQL */ `
  query GetSqlQuery($id: ID!) {
    getSQLQuery(id: $id) {
      id
      name
      queryString
      ownerEmail
      ownerId
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSqlQuerys = /* GraphQL */ `
  query ListSqlQuerys(
    $filter: ModelSQLQueryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSQLQuerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        queryString
        ownerEmail
        ownerId
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSessionQuery = /* GraphQL */ `
  query GetSessionQuery($id: ID!) {
    getSessionQuery(id: $id) {
      id
      queryString
      queryExecutionId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSessionQuerys = /* GraphQL */ `
  query ListSessionQuerys(
    $filter: ModelSessionQueryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionQuerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        queryString
        queryExecutionId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
