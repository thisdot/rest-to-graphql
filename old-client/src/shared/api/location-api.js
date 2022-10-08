import { request, gql } from "graphql-request";

const LOCATION_API_URL = process.env.NEXT_PUBLIC_LOCATION_API_URL;
const GRAPHQL_API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

const locationFetch = async (url) => {
  const resp = await fetch(url);
  const respData =  await resp.json();
  return respData;
};

export const getAll = async ({ page = 1 }) => {
  const resp = await request(
    GRAPHQL_API_URL,
    gql`
      query Locations($pagination: PaginationInput) {
        locations(pagination: $pagination) {
          nodes {
            id
            name
            dimension
            type
          }
          pageInfo {
            totalPages
          }
        }
      }
    `,
    {
      pagination: {
        page,
        perPage: 6,
      },
    }
  );
  return resp.locations;
};

export const getById = async (id) => {
  return locationFetch(`${LOCATION_API_URL}/${id}`);
};
