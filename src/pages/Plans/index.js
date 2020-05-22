/* eslint-disable consistent-return */
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import Alert from '../../services/alert';

import {
  loadPlansRequest,
  updatePageRequest,
  deletePlanRequest,
} from '../../store/modules/plan/actions';

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
  const plans = useSelector((state) => state.plan.plans);
  const dispatch = useDispatch();

  async function handleDelete(id) {
    const { value } = await Alert.delete();
    if (value) {
      return dispatch(deletePlanRequest(id));
    }
  }

  useEffect(() => {
    dispatch(loadPlansRequest());
  }, []);
  return (
    <>
      <HeaderPage title="Gerenciando Planos">
        <LinkButton to="/students/new">
          <FaPlus color="#fff" size={18} />
          Cadastrar
        </LinkButton>
      </HeaderPage>
      <Panel>
        <Table>
          <Thead>
            <tr>
              <Th>Título</Th>
              <Th align="center">Duração</Th>
              <Th align="center">Valor p/Mês</Th>
              <Th />
            </tr>
          </Thead>
          <Tbody>
            {plans.map((plan) => (
              <tr key={plan.id}>
                <Td width={50}>{plan.title}</Td>
                <Td align="center">{plan.duration}</Td>
                <Td align="center">{plan.price}</Td>
                <Td align="center">
                  <DeleteButton
                    type="button"
                    onClick={() => handleDelete(plan.id)}
                  >
                    Apagar
                  </DeleteButton>

                  <Link
                    style={{ color: '#4D85EE' }}
                    to={`/plans/edit/${plan.id}`}
                  >
                    Editar
                  </Link>
                </Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Panel>
      <Pagination module="plan" update={updatePageRequest} />
    </>
  );
}

export default Plans;
