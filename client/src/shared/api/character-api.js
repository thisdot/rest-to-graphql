const CHARACTER_API_URL = process.env.NEXT_PUBLIC_CHARACTER_API_URL;

const characterFetch = async (url) => {
  const resp = await fetch(url);
  const respData =  await resp.json();
  return respData;
};

export const getAll = async ({ page = 1 }) => {
  const data = await characterFetch(`${CHARACTER_API_URL}?page=${page}`);
  return data
};

export const getById = async (id) => {
  return characterFetch(`${CHARACTER_API_URL}/${id}`);
};
