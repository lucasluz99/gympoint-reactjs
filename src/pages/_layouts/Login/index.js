import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';

function LoginLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

LoginLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginLayout;
