import React, { useEffect } from 'react';

import { FaPlus } from 'react-icons/fa';

import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';
import InputIcon from '../../components/InputIcon';

function Students() {
  return (
    <HeaderPage title="Gerenciando Alunos">
      <LinkButton to="/students/new">
        <FaPlus color="#fff" size={18} />
        Cadastrar
      </LinkButton>
      <InputIcon handleChange={() => {}} />
    </HeaderPage>
  );
}

export default Students;
