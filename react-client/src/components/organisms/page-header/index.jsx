import React from 'react';
import styled from 'styled-components';
import { AppBar, Link, Logo, SimpleGrid, Typography } from '../../atoms';

const PageTitle = styled(Typography)`
  color: #000;
  font-size: 1.75rem;
`;

const Navigation = styled(SimpleGrid)`
  width: auto;
`;

const PageHeader = () => (
  <AppBar>
    <SimpleGrid alignItems="center" justify="space-between">
      <Link href="/" underline="none">
        <SimpleGrid alignItems="center">
          <Logo />
          <PageTitle>
            Rick and Morty
          </PageTitle>
        </SimpleGrid>
      </Link>

      <Navigation>
        <Link href="/characters">
          Characters
        </Link>
        <Link href="/locations">
          Locations
        </Link>
      </Navigation>
    </SimpleGrid>
  </AppBar>
);

export default PageHeader;
