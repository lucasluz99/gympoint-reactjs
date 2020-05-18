import React from 'react';

import { StyledTh } from './styles';

function Th({ children, align = 'left' }) {
  return <StyledTh align={align}>{children}</StyledTh>;
}

export default Th;
