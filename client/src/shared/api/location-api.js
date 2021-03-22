const LOCATION_API_URL = process.env.NEXT_PUBLIC_LOCATION_API_URL;

const locationFetch = async (url) => {
  const resp = await fetch(url);
  const respData =  await resp.json();
  return respData;
};

export const getAll = async ({ page = 1 }) => {
  const data = await locationFetch(`${LOCATION_API_URL}?page=${page}`);
  return data
};

export const getById = async (id) => {
  return locationFetch(`${LOCATION_API_URL}/${id}`);
};
