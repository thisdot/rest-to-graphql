import React from 'react';
import { Helmet } from 'react-helmet';

import client from '../../apollo-client';
import { CharacterList } from '../../src/components/organisms';
import { CHARACTERS_QUERY } from '../../src/shared/api/character-api';

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

// export async function getServerSideProps(context) {
//   const { data } = await client.query({
//     query: CHARACTERS_QUERY,
//     variables: {
//       pagination: {
//         page: 1,
//         perPage: 9,
//       },
//     },
//   });
//   return {
//     props: {
//       charactersData: data,
//     }
//   };
// }
