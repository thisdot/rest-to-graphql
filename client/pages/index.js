import React from 'react';
import { Helmet } from 'react-helmet';
import { SimpleGrid, Typography } from '../src/components/atoms';

const Home = () => (
  <>
    <Helmet
      title="Rick and Morty - Homepage"
      meta={[{ property: 'og:title', content: 'Rick and Morty - Characters' }]}
    />
    <SimpleGrid direction="column">
      <Typography type="h1">
        Welcome to the Ricky and Morty REST to GraphQL Demo!
      </Typography>
      <Typography>
        With API migrations, there are 2 paths:
      </Typography>
      <ol>
        <li>Replace each API manually</li>
        <li>Utilize your old REST API to shim your GraphQL API</li>
      </ol>
      <Typography>
        We'll demonstrate the 2nd option as it's a more scalable solution to let you move more quickly!
      </Typography>
    </SimpleGrid>
  </>
);

export default Home;
