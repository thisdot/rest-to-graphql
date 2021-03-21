import React from 'react';
import MCard from '@material-ui/core/Card';
import MCardContent from '@material-ui/core/CardContent';

const Card = ({ children }) => {
  return (
    <MCard raised={true}>
      <MCardContent>
        {children}
      </MCardContent>
    </MCard>
  );
};

export default Card;
