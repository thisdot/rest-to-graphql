import React from 'react';
import { ProfileCard } from '../../molecules';

const CharacterCard = ({ character }) => (
  <ProfileCard
    profileImage={character.image}
    profileName={character.name}
    profileUrl={`/characters/${character.id}`}
  >
    {character.status}
    {character.species}
  </ProfileCard>
);

export default CharacterCard;
