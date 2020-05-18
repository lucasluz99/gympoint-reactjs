import React from 'react';

import { StyledTd } from './styles';

function Td({ children, align = 'left' }) {
  return <StyledTd align={align}>{children}</StyledTd>;
}

export default Td;
