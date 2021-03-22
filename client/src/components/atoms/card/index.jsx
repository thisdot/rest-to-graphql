import React from 'react';
import MCard from '@material-ui/core/Card';

const Card = ({ children }) => {
  return (
    <MCard raised={true}>
      {children}
    </MCard>
  );
};

export default Card;
