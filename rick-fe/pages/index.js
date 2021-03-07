import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { PageHeader, CharacterList } from '../src/components/organisms';

const Home = () => (
  <>
    <Helmet
      title="Hello there"
      meta={[{ property: 'og:title', content: 'Hello there' }]}
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
