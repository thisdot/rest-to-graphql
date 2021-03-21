const characterFetch = async (url) => {
  const resp = await fetch(url);
  const respData =  await resp.json();
  return respData;
};

export const getAll = async ({ page = 1 }) => {
  const data = await characterFetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  return data
};

export const getById = async (id) => {
  return characterFetch(`https://rickandmortyapi.com/api/character/${id}`);
};
