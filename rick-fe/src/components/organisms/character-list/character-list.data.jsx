import React, { useState } from 'react';
import { useQuery } from 'react-query'
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { getAll } from '../../../shared/api/character-api';
import CharacterListView from './character-list.view';

const CharacterListData = () => {
  const [page, setPage] = useState(0);
  const { isLoading, error, data } = useQuery(['charactersData', page], () => getAll({ page }));
  const changePage = (event, page) => setPage(page);

  if (isLoading) return 'Loading...'

  if (error) return 'Error occured! ' + error.message;

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <Pagination disabled={isLoading} count={data.info.pages} page={page} onChange={changePage} size="large" />
      </Grid>
      <Grid item>
        <CharacterListView characters={data.results} />
      </Grid>
    </Grid>
  );
};

export default CharacterListData;
