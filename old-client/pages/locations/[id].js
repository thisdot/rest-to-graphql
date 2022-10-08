import React from 'react';
import { Helmet } from 'react-helmet';

// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import { PageHeader, CharacterList } from '../../src/components/organisms';
import { getById } from '../../src/shared/api/location-api';

const Location = ({ location }) => {
  return (
    <>
      <Helmet
        title={`Rick and Morty - ${location.name}`}
        meta={[{ property: 'og:title', content: location.name }]}
      />
      Location Info
    </>
  );
};

export default Location;

export async function getServerSideProps(context) {
  const data = await getById(context.params.id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location: data,
    },
  };
}
