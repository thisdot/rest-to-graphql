import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { CHARACTERS_QUERY } from '../../../shared/api/character-api';
import { SimpleGrid } from '../../atoms';
import { Pagination } from '../../molecules';
import CharacterListView from './character-list.view';

const CharacterListData = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: {
      pagination: {
        page,
        perPage: 9,
      }
    }
  });
  const changePage = (event, page) => setPage(page);

  if (loading) return 'Loading...'

  if (error) return 'Error occured! ' + error.message;

  const { pageInfo, nodes } = data.characters;

  return (
    <SimpleGrid
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Pagination
        disabled={loading}
        totalPages={pageInfo?.totalPages}
        currentPage={page}
        onChange={changePage}
        size="lg"
      />
      <CharacterListView characters={nodes || []} />
    </SimpleGrid>
  );
};

export default CharacterListData;
