import React from 'react';
import { MdSearch } from 'react-icons/md';
import { debounce } from 'lodash';

import colors from '../../styles/colors';
import { Container, Input } from './styles';

function InputIcon({ handleChange }) {
  const handleChangeDebounce = debounce(handleChange, 1000);

  return (
    <Container>
      <MdSearch size={25} color={colors.input} />
      <Input onChange={handleChangeDebounce} placeholder="Pesquise pelo nome" />
    </Container>
  );
}

export default InputIcon;
