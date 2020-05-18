import React, { useEffect, useState } from 'react';

import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { searchStudentRequest } from '../../store/modules/student/actions';

import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';
import InputIcon from '../../components/InputIcon';
import Panel from '../../components/Panel';
import Table from '../../components/Table/Table';
import Thead from '../../components/Table/Thead';
import Th from '../../components/Table/Th';
import Tbody from '../../components/Table/Tbody';
import Td from '../../components/Table/Td';

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
      <Panel>
        <Table>
          <Thead>
            <tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th align="center">Idade</Th>
              <Th />
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
            <tr>
              <Td>Lucas Luz</Td>
              <Td>lucasluz@email.com</Td>
              <Td align="center">20</Td>
              <Td align="center">Apagar / Deletar</Td>
            </tr>
          </Tbody>
        </Table>
      </Panel>
    </>
  );
}

export default Students;
