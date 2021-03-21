import React from 'react';
import NLink from 'next/link';
import MLink from '@material-ui/core/Link';

const Link = ({ className, href, children, underline }) => {
  return (
    <NLink href={href} passHref={true}>
      <MLink className={className} underline={underline}>
        {children}
      </MLink>
    </NLink>
  );
};

export default Link;
