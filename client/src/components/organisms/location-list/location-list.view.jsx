import React from 'react';
import Grid from '@material-ui/core/Grid';
import LocationCard from '../location-card';

const LocationList = ({ locations }) => (
  <Grid container spacing={3}>
    {locations.map((location) => (
      <Grid item xs={12} md={4} key={location.id} >
        <LocationCard location={location} />
      </Grid>
    ))}
  </Grid>
);

export default LocationList;
