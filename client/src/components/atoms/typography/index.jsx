import React from 'react';
import PropTypes from 'prop-types';
import MTypography from '@material-ui/core/Typography';

const VARIANTS = {
  'p': 'body1',
  'small': 'body2',
}

const Typography = ({ className, color, type, children }) => {
  const variant = VARIANTS[type] || type;
  return (
    <MTypography className={className} color={color} variant={variant}>
      {children}
    </MTypography>
  );
};

Typography.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small']),
};
Typography.defaultProps = {
  type: 'p',
};

export default Typography;
