import React from 'react';
import Grid from '@material-ui/core/Grid';

const buildItemKey = (item, index) => {
	if (item.key) {
		return item.key;
	}

	if (typeof item === 'string') {
		return item;
	}

	return index;
};

const SimpleGrid = ({ children, itemProps, ...rest }) => {
  const wrappedChildren = children
    .filter((child) => !!child)
    .map((child, index) => (
      <Grid key={buildItemKey(child, index)} item {...itemProps}>
        {child}
      </Grid>
    ));

  return (
    <Grid container spacing={1} {...rest}>
      {wrappedChildren}
    </Grid>
  );
};

export default SimpleGrid;
