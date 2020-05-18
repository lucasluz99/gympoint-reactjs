import { takeLatest, call, put, all } from 'redux-saga/effects';
import { searchStudentSuccess } from './actions';
import api from '../../../services/api';

function* searchStudent({ payload }) {
  const { name, page } = payload;

  const { data } = yield call(api.get, `/students?name=${name}&page=${page}`);

  return yield put(searchStudentSuccess(data));
}

export default all([takeLatest('@student/SEARCH_REQUEST', searchStudent)]);
