/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';

import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  searchStudentRequest,
  loadStudentsRequest,
  deleteStudentRequest,
} from '../../store/modules/student/actions';

import Alert from '../../services/alert';

import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';
import InputIcon from '../../components/InputIcon';
import Panel from '../../components/Panel';
import DeleteButton from '../../components/DeleteButton';
import Table from '../../components/Table/Table';
import Thead from '../../components/Table/Thead';
import Th from '../../components/Table/Th';
import Tbody from '../../components/Table/Tbody';
import Td from '../../components/Table/Td';

function Students() {
  const [inputValue, setInputValue] = useState('');
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();

  function handleChange(name) {
    setInputValue(name);
    dispatch(searchStudentRequest(name));
  }

  async function handleDelete(student) {
    const { id } = student;

    if (!student.delete) {
      await Alert.alert();
      return;
    }
    const { value } = await Alert.delete();
    if (value) {
      return dispatch(deleteStudentRequest(id));
    }
  }

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []);

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
            {students.map((student) => (
              <tr key={student.id}>
                <Td width={40}>{student.name}</Td>
                <Td>{student.email}</Td>
                <Td align="center">{student.age}</Td>
                <Td align="center">
                  <DeleteButton
                    type="button"
                    onClick={() => handleDelete(student)}
                  >
                    Apagar
                  </DeleteButton>

                  <Link
                    style={{ color: '#4D85EE' }}
                    to={`/students/edit/${student.id}`}
                  >
                    Editar
                  </Link>
                </Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Panel>
    </>
  );
}

export default Students;
