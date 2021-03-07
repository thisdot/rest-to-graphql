import React from 'react';
import Grid from '@material-ui/core/Grid';
import CharacterCard from '../character-card';

const CharacterList = ({ characters }) => (
  <Grid container spacing={3}>
    {characters.map((character) => (
      <Grid item xs={12} md={4} key={character.id} >
        <CharacterCard character={character} />
      </Grid>
    ))}
  </Grid>
);

export default CharacterList;
