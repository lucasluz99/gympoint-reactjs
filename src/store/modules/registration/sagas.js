import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { updateRegistrationsSuccess, updatePageSuccess } from './actions';
import api from '../../../services/api';
import history from '~/services/history';

function* loadRegistrations() {
  const { data } = yield call(api.get, '/registrations');

  const formatted = data.data.map((registration) => ({
    ...registration,

    startDateFormatted: format(
      parseISO(registration.start_date),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    ),
    endDateFormatted: format(
      parseISO(registration.end_date),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: pt,
      }
    ),
  }));

  return yield put(updateRegistrationsSuccess(formatted));
}

/* function* updatePage({ payload }) {
  try {
    const { page } = payload;

    const { data } = yield call(api.get, `/registrations?page=${page}`);

    yield put(updatePlansSuccess(data));
    return yield put(updatePageSuccess(page));
  } catch (err) {
    return toast.error('Ocorreu algum erro,tente novamente mais tarde');
  }
}

function* deletePlan({ payload }) {
  const { id } = payload;

  const deleted = yield call(api.delete, `/plans/${id}`);

  const { data } = yield call(api.get, '/plans');

  return yield put(updatePlansSuccess(data));
}

function* newPlan({ payload }) {
  try {
    const response = yield call(api.post, '/plans', { ...payload.data });

    const { data } = yield call(api.get, '/plans');

    console.tron.log(data);

    toast.success('Usuário criado com sucesso');
    return yield put(updatePlansSuccess(data));
  } catch (err) {
    if (err.response.data.error === 'This plan already exists') {
      return toast.error('Já existe um plano com este nome');
    }
  }
}

function* editPlan({ payload }) {
  const { price, duration, title } = payload;

  try {
    const plan = yield call(api.put, `/plans/${payload.id}`, {
      price,
      duration,
      title,
    });

    const { data } = yield call(api.get, '/plans');

    toast.success('Plano editado com sucesso');
    return yield put(updatePlansSuccess(data));
  } catch (err) {
    if (err.response.data.error === 'This title is already being used') {
      return toast.error('Já existe um plano com este nome');
    }
    return toast.error(
      'Não foi possível editar este plano verifique os dados ou tente novamente mais tarde'
    );
  }
} */

export default all([
  takeLatest('@registration/LOAD_REQUEST', loadRegistrations),
]);
