import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import colors from '../../styles/colors';
import { Container, Input } from './styles';

function InputIcon({ handleChange }) {
  return (
    <Container>
      <MdSearch size={25} color={colors.border} />
      <Input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Pesquise pelo nome"
      />
    </Container>
  );
}

export default InputIcon;
