import React from 'react';
import { Helmet } from 'react-helmet';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { LocationList } from '../../src/components/organisms';
import { getAll } from '../../src/shared/api/location-api';

const Locations = ({ locationsData }) => (
  <>
    <Helmet
      title="Rick and Morty - Locations"
      meta={[{ property: 'og:title', content: 'Rick and Morty - Locations' }]}
    />
    <LocationList initialData={locationsData} />
  </>
);

export default Locations;

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
