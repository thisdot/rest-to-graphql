import React from 'react';
import MPagination from '@material-ui/lab/Pagination';

const Pagination = ({
  disabled,
  totalPages,
  currentPage,
  onChange,
  size = 'lg',
}) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'small';
      case 'md':
        return 'medium';
      case 'lg':
      default:
        return 'large';
    }
  }
  return (
    <MPagination
      disabled={disabled}
      count={totalPages}
      page={currentPage}
      onChange={onChange}
      size={getSize()}
    />
  );
};

export default Pagination;
