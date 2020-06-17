import React from 'react';

import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

function Spinner({ size, color }) {
  return (
    <Container>
      <FaSpinner size={size} color={color} />
    </Container>
  );
}

export default Spinner;
