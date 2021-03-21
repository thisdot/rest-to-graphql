import React, { useState } from 'react';
import { useQuery } from 'react-query'

import { getAll } from '../../../shared/api/character-api';
import { SimpleGrid } from '../../atoms';
import { Pagination } from '../../molecules';
import CharacterListView from './character-list.view';

const CharacterListData = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery(
    ['charactersData', page],
    () => getAll({ page }),
  );
  const changePage = (event, page) => setPage(page);

  if (isLoading) return 'Loading...'

  if (error) return 'Error occured! ' + error.message;

  return (
    <SimpleGrid
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Pagination
        disabled={isLoading}
        totalPages={data.info.pages}
        currentPage={page}
        onChange={changePage}
        size="lg"
      />
      <CharacterListView characters={data.results} />
    </SimpleGrid>
  );
};

export default CharacterListData;
