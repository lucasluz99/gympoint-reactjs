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
export default all([
  takeLatest('@plan/LOAD_REQUEST', loadPlans),
  takeLatest('@plan/UPDATE_PAGE_REQUEST', updatePage),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
]);
