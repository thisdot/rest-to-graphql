import React from 'react';
import { Icon } from '../../atoms';
import { ListWithIcons, ProfileCard } from '../../molecules';

const CharacterCard = ({ character }) => (
  <ProfileCard
    profileImage={character.image}
    profileName={character.name}
    profileUrl={`/characters/${character.id}`}
  >
    <ListWithIcons
      items={[
        { key: 'status', icon: <Icon name="favorite" />, text: character.status },
        { key: 'species', icon: <Icon name="person" />, text: character.species },
        // { key: 'location', icon: <Icon name="location" />, text: character.location },
      ]}
    />
  </ProfileCard>
);

export default CharacterCard;
