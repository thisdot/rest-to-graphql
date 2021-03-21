import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => (
  <>
    <Helmet
      title="Rick and Morty - Homepage"
      meta={[{ property: 'og:title', content: 'Rick and Morty - Characters' }]}
    />
    <h1>Welcome to the Ricky and Morty REST to GraphQL Demo!</h1>
    <p>
      With API migrations, there are 2 paths:
    </p>
    <ol>
      <li>Replace each API manually</li>
      <li>Utilize your old REST API to shim your GraphQL API</li>
    </ol>
    <p>
      We'll demonstrate the 2nd option as it's a more scalable solution to let you move more quickly!
    </p>
  </>
);

export default Home;
