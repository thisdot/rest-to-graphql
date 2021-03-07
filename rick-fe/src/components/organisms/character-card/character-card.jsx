import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const CharacterAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
`;

const CharacterCard = ({ character }) => (
  <Card raised={true}>
    <CardContent>
      <CharacterAvatar src={character.image} alt={character.name} variant="rounded" />
      <Typography variant="h4">{character.name}</Typography>
    </CardContent>
  </Card>
);

export default CharacterCard;
