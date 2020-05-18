import React, { useEffect, useState } from 'react';

import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { searchStudentRequest } from '../../store/modules/student/actions';

import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';
import InputIcon from '../../components/InputIcon';
import Panel from '../../components/Panel';

function Students() {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  function handleChange(name) {
    setInputValue(name);
    dispatch(searchStudentRequest(name));
  }
  return (
    <>
      <HeaderPage title="Gerenciando Alunos">
        <LinkButton to="/students/new">
          <FaPlus color="#fff" size={18} />
          Cadastrar
        </LinkButton>
        <InputIcon handleChange={handleChange} value={inputValue} />
      </HeaderPage>
      <Panel />
    </>
  );
}

export default Students;
