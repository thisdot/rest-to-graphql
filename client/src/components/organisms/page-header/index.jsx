import React from 'react';
import styled from 'styled-components';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { AppBar, Link, Logo, SimpleGrid, Typography } from '../../atoms';
import { isDarkModeVar } from '../../../../apollo-client';

const PageTitle = styled(Typography)`
  color: #000;
  font-size: 1.75rem;
`;

const Navigation = styled(SimpleGrid)`
  width: auto;
`;

const PageHeader = () => {
  const darkMode = useReactiveVar(isDarkModeVar);
  const toggleDarkMode = () => {
    const current = isDarkModeVar();
    console.log(current);
    isDarkModeVar(!current);
  };
  return (
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
          <button onClick={toggleDarkMode}>
            Dark Mode
            {darkMode ? 'On' : 'Off'}
          </button>
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
}

export default PageHeader;
