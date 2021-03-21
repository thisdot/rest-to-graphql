import React from 'react';
import { Helmet } from 'react-helmet';

// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import { PageHeader, CharacterList } from '../../src/components/organisms';
import { getById } from '../../src/shared/api/character-api';

const Character = ({ character }) => {
  return (<>
    <Helmet
      title={`Rick and Morty - ${character.name}`}
      meta={[{ property: 'og:title', content: character.name }]}
    />
    Character Info
  </>);
};

export default Character;

export async function getServerSideProps(context) {
  const data = await getById(context.params.id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      character: data,
    },
  };
}
