export const getAll = async ({ page = 1 }) => {
  const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const respData =  await resp.json();
  return respData;
}

export const getById = async (id) => {
  const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const respData =  await resp.json();
  return respData;
}
