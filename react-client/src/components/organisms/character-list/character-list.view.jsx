import React from 'react';
import { SimpleGrid } from '../../atoms';
import CharacterCard from '../character-card';

const CharacterList = ({ characters }) => (
  <SimpleGrid spacing={3} itemProps={{ xs: 12, md: 4 }}>
    {characters.map((character) => (
      <CharacterCard character={character} key={character.id} />
    ))}
  </SimpleGrid>
);

export default CharacterList;
