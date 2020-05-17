import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import Title from '../Title';

function HeaderPage({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div>{children}</div>
    </Container>
  );
}

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default HeaderPage;
