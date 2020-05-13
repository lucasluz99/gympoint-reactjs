import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

import colors from '../../styles/colors';

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;

Button.defaultProps = {
  background: colors.primary,
  color: colors.light,
};

Button.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
