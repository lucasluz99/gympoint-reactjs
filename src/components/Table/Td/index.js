import React from 'react';

import { StyledTd } from './styles';

function Td({ children, align = 'left', width }) {
  return (
    <StyledTd width={width} align={align}>
      {children}
    </StyledTd>
  );
}

export default Td;
