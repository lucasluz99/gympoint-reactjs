import { takeLatest, call, put, all } from 'redux-saga/effects';
import { searchStudentSuccess, loadStudentsSuccess } from './actions';
import api from '../../../services/api';

function* searchStudent({ payload }) {
  const { name, page } = payload;

  const { data } = yield call(api.get, `/students?name=${name}&page=${page}`);

  return yield put(searchStudentSuccess(data));
}

function* loadStudents({ payload }) {
  const { data } = yield call(api.get, `/students`);

  return yield put(loadStudentsSuccess(data));
}

export default all([
  takeLatest('@student/SEARCH_REQUEST', searchStudent),
  takeLatest('@student/LOAD_REQUEST', loadStudents),
]);
