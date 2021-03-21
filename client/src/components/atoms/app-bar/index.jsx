import React from 'react';
import styled from 'styled-components';
import MAppBar from '@material-ui/core/AppBar';
import MToolbar from '@material-ui/core/Toolbar';

const StyledAppBar = styled(MAppBar)`
  background-color: #eee;
`;

const AppBar = ({ children }) => (
  <StyledAppBar position="static">
    <MToolbar>
      {children}
    </MToolbar>
  </StyledAppBar>
);

export default AppBar;
