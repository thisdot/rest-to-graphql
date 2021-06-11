import React from 'react';
import MCardMedia from '@material-ui/core/CardMedia';

const CardMedia = ({ height, image, title }) => {
  return (
    <MCardMedia
      component="img"
      alt={title}
      height={height}
      image={image}
      title={title}
    />
  );
};

export default CardMedia;
