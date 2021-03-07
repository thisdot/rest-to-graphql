import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { PageHeader, CharacterList } from '../src/components/organisms';

const Home = () => (
  <>
    <Helmet
      title="Rick and Morty - Characters"
      meta={[{ property: 'og:title', content: 'Rick and Morty - Characters' }]}
    />
    <Grid
      container
      direction="column"
      spacing={1}
    >
      <Grid item>
        <PageHeader />
      </Grid>
      <Grid item>
        <Container>
          <CharacterList />
        </Container>
      </Grid>
    </Grid>
  </>
);

export default Home;
