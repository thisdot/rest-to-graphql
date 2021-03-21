import React from 'react';
import { Helmet } from 'react-helmet';
import { CharacterList } from '../../src/components/organisms';
import { getAll } from '../../src/shared/api/character-api';

const Characters = ({ charactersData }) => (
  <>
    <Helmet
      title="Rick and Morty - Characters"
      meta={[{ property: 'og:title', content: 'Rick and Morty - Characters' }]}
    />
    <CharacterList initialData={charactersData} />
  </>
);

export default Characters;

export async function getServerSideProps(context) {
  const data = await getAll({ page: 1 });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      charactersData: data,
    },
  };
}
