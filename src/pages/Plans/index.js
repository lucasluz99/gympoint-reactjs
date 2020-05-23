/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import Alert from '../../services/alert';

import {
  loadPlansRequest,
  updatePageRequest,
  deletePlanRequest,
  activatePlanRequest,
  showCanceledsRequest,
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
  const totalPages = useSelector((state) => state.plan.totalPages);
  const dispatch = useDispatch();

  const [showCanceleds, setShowCanceleds] = useState(false);

  async function handleDelete(id) {
    const { value } = await Alert.delete();
    if (value) {
      return dispatch(deletePlanRequest(id));
    }
  }

  useEffect(() => {
    dispatch(loadPlansRequest());
  }, []);

  function handleCheckbox(checked) {
    if (checked) {
      setShowCanceleds(true);
      return dispatch(showCanceledsRequest());
    }
    setShowCanceleds(false);
    return dispatch(loadPlansRequest());
  }
  return (
    <>
      <HeaderPage title="Gerenciando Planos">
        <div id="checkbox-wrapper">
          <input
            type="checkbox"
            id="checkbox"
            onChange={(e) => handleCheckbox(e.target.checked)}
          />
          <span htmlFor="checkbox">Ver planos desativados</span>
        </div>
        <LinkButton to="/plans/new">
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
                <Td width={30}>{plan.title}</Td>
                <Td width={25} align="center">
                  {plan.duration} meses
                </Td>
                <Td width={25} align="center">
                  {plan.priceFormatted}
                </Td>
                <Td align="center">
                  {showCanceleds ? (
                    <DeleteButton
                      color="#4D85EE"
                      type="button"
                      onClick={() => dispatch(activatePlanRequest(plan.id))}
                    >
                      Ativar
                    </DeleteButton>
                  ) : (
                    <>
                      <DeleteButton
                        type="button"
                        onClick={() => handleDelete(plan.id)}
                      >
                        Desativar
                      </DeleteButton>

                      <Link
                        style={{ color: '#4D85EE' }}
                        to={`/plans/edit/${plan.id}`}
                      >
                        Editar
                      </Link>
                    </>
                  )}
                </Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Panel>
      {totalPages !== 0 && (
        <Pagination module="plan" update={updatePageRequest} />
      )}
    </>
  );
}

export default Plans;
