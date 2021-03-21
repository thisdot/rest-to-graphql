import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const LocationAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
`;

const LocationCard = ({ location }) => (
  <Card raised={true}>
    <CardContent>
      <LocationAvatar src={location.image} alt={location.name} variant="rounded" />
      <Link href={`/locations/${location.id}`}>
        <Typography variant="h4">{location.name}</Typography>
      </Link>
      {location.type}
      {location.dimension}
    </CardContent>
  </Card>
);

export default LocationCard;
