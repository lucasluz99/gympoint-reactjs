import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import HeaderPage from '../../components/HeaderPage';
import LinkButton from '../../components/LinkButton';
import Panel from '../../components/Panel';
import DeleteButton from '../../components/DeleteButton';

import Table from '../../components/Table/Table';
import Thead from '../../components/Table/Thead';
import Th from '../../components/Table/Th';
import Tbody from '../../components/Table/Tbody';
import Td from '../../components/Table/Td';
import Pagination from '../../components/Pagination';

function Plans() {
  return (
    <>
      <HeaderPage title="Gerenciando Alunos">
        <LinkButton to="/students/new">
          <FaPlus color="#fff" size={18} />
          Cadastrar
        </LinkButton>
      </HeaderPage>
      <Panel>
       {/*  <Table>
          <Thead>
            <tr>
              <Th>Título</Th>
              <Th align="center">Duração</Th>
              <Th align="center">Valor p/Mês</Th>
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
                  <DeleteButton type="button" onClick={() => {}}>
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
        </Table> */}
      </Panel>
      <Pagination module="plan" />
    </>
  );
}

export default Plans;
