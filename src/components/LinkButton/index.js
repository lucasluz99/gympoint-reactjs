import React from 'react';
import colors from '../../styles/colors';
import { StyledLinkButton } from './styles';

function LinkButton({ to, children, background = colors.primary }) {
  return (
    <StyledLinkButton background={background} to={to}>
      {children}
    </StyledLinkButton>
  );
}

export default LinkButton;
