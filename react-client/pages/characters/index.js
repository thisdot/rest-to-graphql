import React from 'react';
import { Helmet } from 'react-helmet';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { CharacterList } from '../../src/components/organisms';
import { getAll } from '../../src/shared/api/character-api';

const Characters = ({ charactersData }) => (
  <>
    <Helmet
      title="Rick and Morty - Characters"
      meta={[{ property: 'og:title', content: 'Rick and Morty - Characters' }]}
    />
    <CharacterList />
  </>
);

export default Characters;

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['charactersData', 1],
    async () => getAll({ page: 1 })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
