/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';

import { FaPlus } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { loadRegistrationsRequest } from '../../store/modules/registration/actions';

import Alert from '../../services/alert';

import LinkButton from '../../components/LinkButton';
import HeaderPage from '../../components/HeaderPage';
import Panel from '../../components/Panel';
import DeleteButton from '../../components/DeleteButton';
import Table from '../../components/Table/Table';
import Thead from '../../components/Table/Thead';
import Th from '../../components/Table/Th';
import Tbody from '../../components/Table/Tbody';
import Td from '../../components/Table/Td';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';

function Registrations() {
  const loading = useSelector((state) => state.registration.loading);
  const registrations = useSelector(
    (state) => state.registration.registrations
  );

  const totalPages = useSelector((state) => state.registration.totalPages);
  const dispatch = useDispatch();

  /* async function handleDelete(registration) {
    const { id } = registration;

    if (!registration.delete) {
      await Alert.alert();
      return;
    }
    const { value } = await Alert.delete();
    if (value) {
      return dispatch(deleteStudentRequest(id));
    }
  } */

  useEffect(() => {
    dispatch(loadRegistrationsRequest());
  }, []);

  return (
    <>
      <HeaderPage title="Gerenciando Matrículas">
        <LinkButton to="/registrations/new">
          <FaPlus color="#fff" size={18} />
          Cadastrar
        </LinkButton>
      </HeaderPage>
      <Panel>
        {loading ? (
          <Spinner color="#444" size={50} />
        ) : (
          <>
            <Table>
              <Thead>
                <tr>
                  <Th>Aluno</Th>
                  <Th align="center">Plano</Th>
                  <Th align="center">Início</Th>
                  <Th align="center">Término</Th>
                  <Th align="center">Ativa</Th>
                  <Th />
                </tr>
              </Thead>
              <Tbody>
                {registrations.map((registration) => (
                  <tr key={registration.id}>
                    <Td width={30}>{registration.student.name}</Td>
                    <Td align="center">{registration.plan.title}</Td>
                    <Td align="center">{registration.startDateFormatted}</Td>
                    <Td align="center">{registration.endDateFormatted}</Td>
                    <Td align="center">
                      {registration.active ? (
                        <MdCheckCircle size={23} color="#42cb59" />
                      ) : (
                        <MdCheckCircle size={23} color="#ddd" />
                      )}
                    </Td>
                    <Td align="center">
                      <DeleteButton type="button" onClick={() => {}}>
                        Apagar
                      </DeleteButton>

                      <Link
                        style={{ color: '#4D85EE' }}
                        to={`/registrations/edit/${registration.id}`}
                      >
                        Editar
                      </Link>
                    </Td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          </>
        )}
      </Panel>

      {totalPages !== 0 && (
        <Pagination module="registration" update={() => {}} />
      )}
    </>
  );
}

export default Registrations;
