import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';

function Students() {
  return (
    <HeaderPage title="Gerenciando Alunos">
      <LinkButton to="/students/new">
        <FaPlus color="#fff" size={18} />
        Cadastrar
      </LinkButton>
      <input type="text" />
    </HeaderPage>
  );
}

export default Students;
