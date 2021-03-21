import React from 'react';
import { Helmet } from 'react-helmet';
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
  const data = await getAll({ page: 1 });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locationsData: data,
    },
  };
}
