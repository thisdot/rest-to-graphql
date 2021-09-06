import React from 'react';
import { Icon } from '../../atoms';
import { ListWithIcons, ProfileCard } from '../../molecules';
import CharacterModal from '../character-modal';

const CharacterCard = ({ character }) => {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>
        <ProfileCard
          profileImage={character.image}
          profileName={character.name}
          profileUrl={`/characters/${character.id}`}
        >
          {/* <ListWithIcons
            items={[
              { key: 'status', icon: <Icon name="favorite" />, text: character.status },
              { key: 'species', icon: <Icon name="person" />, text: character.species },
              { key: 'location', icon: <Icon name="location" />, text: character.currentLocation?.name ?? 'UNKNOWN' },
              { key: 'origin', icon: <Icon name="home" />, text: character.origin?.name ?? 'UNKNOWN' },
            ]}
          /> */}
        </ProfileCard>
      </div>
      {open && (
        <CharacterModal
          id={character.id}
          openModal={open}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default CharacterCard;
