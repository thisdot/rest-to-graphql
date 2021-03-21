import React from 'react';
import styled from 'styled-components';
import MAppBar from '@material-ui/core/AppBar';
import MToolbar from '@material-ui/core/Toolbar';
import MTypography from '@material-ui/core/Typography';
import MLink from '@material-ui/core/Link';
import { Logo } from '../../atoms';

const AppBar = styled(MAppBar)`
  background-color: #eee;
`;

const LogoContainer = styled(MLink)`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const PageTitle = styled(MTypography)`
  color: #000;
  margin-left: 1rem;
`;

const Navigation = styled.div`
  width: auto;
`;

const PageHeader = () => (
  <AppBar position="static">
    <MToolbar>
      <LogoContainer href="/" color="inherit" underline="none">
        <Logo />
        <PageTitle display="inline">
          Rick and Morty
        </PageTitle>
      </LogoContainer>

      <Navigation>
        <MLink href="/characters">
          Characters
        </MLink>
        <MLink href="/locations">
          Locations
        </MLink>
      </Navigation>
    </MToolbar>
  </AppBar>
);

export default PageHeader;
