import React, { useState } from 'react';
import { useQuery } from 'react-query'

import { getAll } from '../../../shared/api/character-api';
import { SimpleGrid } from '../../atoms';
import { Pagination } from '../../molecules';
import CharacterListView from './character-list.view';

const CharacterListData = () => {
  const [page, setPage] = useState(1);
  const { isFetching, error, data } = useQuery(
    ['charactersData', page],
    async () => getAll({ page }),
  );
  const changePage = (event, page) => setPage(page);

  if (isFetching) return 'Loading...'

  if (error) return 'Error occured! ' + error.message;

  const { pageInfo, nodes } = data;

  return (
    <SimpleGrid
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Pagination
        disabled={isFetching}
        totalPages={pageInfo.totalPages}
        currentPage={page}
        onChange={changePage}
        size="lg"
      />
      <CharacterListView characters={nodes} />
    </SimpleGrid>
  );
};

export default CharacterListData;
