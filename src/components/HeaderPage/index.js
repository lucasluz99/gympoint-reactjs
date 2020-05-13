import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function HeaderPage({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default HeaderPage;
