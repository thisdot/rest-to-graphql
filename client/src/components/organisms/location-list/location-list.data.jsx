import React, { useState } from 'react';
import { useQuery } from 'react-query'

import { getAll } from '../../../shared/api/location-api';
import { SimpleGrid } from '../../atoms';
import { Pagination } from '../../molecules';
import LocationListView from './location-list.view';

const LocationListData = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery(
    ['locationsData', page],
    async () => getAll({ page }),
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
      <LocationListView locations={data.results} />
    </SimpleGrid>
  );
};

export default LocationListData;
