import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updatePlansSuccess, updatePageSuccess } from './actions';
import api from '../../../services/api';

function* loadPlans() {
  const { data } = yield call(api.get, '/plans');

  return yield put(updatePlansSuccess(data));
}

function* updatePage({ payload }) {
  try {
    const { page } = payload;

    const { data } = yield call(api.get, `/plans?page=${page}`);

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

function* showCanceled() {
  const { data } = yield call(api.get, '/plans/canceled');

  return yield put(updatePlansSuccess(data));
}

function* activatePlan({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.put, `/plans/canceled/${id}`);

    const { data } = yield call(api.get, '/plans/canceled');

    toast.success('Plano ativado');
    return yield put(updatePlansSuccess(data));
  } catch (err) {
    return toast.error('Ocorreu algum erro,tente novamente mais tarde');
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
}

export default all([
  takeLatest('@plan/LOAD_REQUEST', loadPlans),
  takeLatest('@plan/UPDATE_PAGE_REQUEST', updatePage),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
  takeLatest('@plan/NEW_REQUEST', newPlan),
  takeLatest('@plan/SHOW_CANCELEDS_REQUEST', showCanceled),
  takeLatest('@plan/ACTIVATE_REQUEST', activatePlan),
  takeLatest('@plan/EDIT_REQUEST', editPlan),
]);
