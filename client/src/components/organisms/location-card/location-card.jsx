import React from 'react';
import { Icon } from '../../atoms';
import { ListWithIcons, ProfileCard } from '../../molecules';

const LocationCard = ({ location }) => (
  <ProfileCard
    profileImage={location.image}
    profileName={location.name}
    profileUrl={`/locations/${location.id}`}
  >
    <ListWithIcons
      items={[
        { key: 'type', icon: <Icon name="globe" />, text: location.type },
        { key: 'dimension', icon: <Icon name="dimension" />, text: location.dimension },
      ]}
    />
  </ProfileCard>
);

export default LocationCard;
