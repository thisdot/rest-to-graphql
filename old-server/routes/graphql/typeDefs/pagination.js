const gql = require('graphql-tag');

const PaginationTypeDef = gql`
  enum SortDirection {
    ASC
    DESC
  }

  input PaginationInput {
    page: Int
    perPage: Int
    sortDirection: SortDirection
  }

  type PageInfo {
    page: Int!
    perPage: Int!
    total: Int!
    totalPages: Int!
  }
`;

module.exports = PaginationTypeDef;
