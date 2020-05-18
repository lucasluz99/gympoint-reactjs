import React from 'react';

import { StyledDeleteButton } from './styles';

function DeleteButton({ children, ...rest }) {
  return <StyledDeleteButton {...rest}>{children}</StyledDeleteButton>;
}

export default DeleteButton;
