import React from 'react';
import { ProfileCard } from '../../molecules';

const LocationCard = ({ location }) => (
  <ProfileCard
    profileImage={location.image}
    profileName={location.name}
    profileUrl={`/locations/${location.id}`}
  >
    {location.type}
    {location.dimension}
  </ProfileCard>
);

export default LocationCard;
