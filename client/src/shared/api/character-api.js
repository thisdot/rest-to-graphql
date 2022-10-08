// import { request } from "graphql-request";
import { gql } from "@apollo/client";

// const CHARACTER_API_URL = process.env.NEXT_PUBLIC_CHARACTER_API_URL;
// const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

// const characterFetch = async (url) => {
//   const resp = await fetch(url);
//   const respData =  await resp.json();
//   return respData;
// };

export const CHARACTERS_QUERY = gql`
  query Characters($pagination: PaginationInput) {
    characters(pagination: $pagination) {
      nodes {
        id
        image: avatar
        name
        __typename
      }
      pageInfo {
        totalPages
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      currentLocation {
        id
        name
      }
      avatar
      name
      __typename
      origin {
        id
        name
      }
      status
      species
    }
  }
`;

// export const getAll = async ({ page = 1 }) => {
//   const resp = await request(
//     GRAPHQL_API_URL,
//     gql`
//       query Characters($pagination: PaginationInput) {
//         characters(pagination: $pagination) {
//           nodes {
//             id
//             currentLocation {
//               id
//               name
//             }
//             image: avatar
//             name
//             origin {
//               id
//               name
//             }
//             status
//             species
//           }
//           pageInfo {
//             totalPages
//           }
//         }
//       }
//     `,
//     {
//       pagination: {
//         page,
//         perPage: 18,
//       },
//     }
//   );
//   return resp.characters;
// };

// export const getById = async (id) => {
//   return characterFetch(`${CHARACTER_API_URL}/${id}`);
// };
