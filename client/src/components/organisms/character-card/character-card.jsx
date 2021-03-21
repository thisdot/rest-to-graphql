import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { Card } from '../../atoms';

const CharacterAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
`;

const CharacterCard = ({ character }) => (
  <Card>
    <CharacterAvatar src={character.image} alt={character.name} variant="rounded" />
    <Link href={`/characters/${character.id}`}>
      <Typography variant="h4">{character.name}</Typography>
    </Link>
    {character.status}
    {character.species}
    Last Known Location: {character.location.name}
  </Card>
);

export default CharacterCard;
