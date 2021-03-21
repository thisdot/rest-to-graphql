import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const CharacterAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
`;

const CharacterCard = ({ character }) => (
  <Card raised={true}>
    <CardContent>
      <CharacterAvatar src={character.image} alt={character.name} variant="rounded" />
      <Link href={`/characters/${character.id}`}>
        <Typography variant="h4">{character.name}</Typography>
      </Link>
      {character.status}
      {character.species}
      Last Known Location: {character.location.name}
    </CardContent>
  </Card>
);

export default CharacterCard;
