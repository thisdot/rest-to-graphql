import React, { useState } from 'react';
import { useQuery } from 'react-query'

import { getAll } from '../../../shared/api/location-api';
import { SimpleGrid } from '../../atoms';
import { Pagination } from '../../molecules';
import LocationListView from './location-list.view';

const LocationListData = () => {
  const [page, setPage] = useState(1);
  const { isFetching, error, data } = useQuery(
    ['locationsData', page],
    async () => getAll({ page }),
  );
  const changePage = (event, page) => setPage(page);

  if (isFetching) return 'Loading...'

  if (error) return 'Error occured! ' + error.message;

  const { nodes, pageInfo } = data;

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
      <LocationListView locations={nodes} />
    </SimpleGrid>
  );
};

export default LocationListData;
