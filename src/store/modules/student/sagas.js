import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  searchStudentSuccess,
  loadStudentsSuccess,
  deleteStudentSuccess,
  editStudentSuccess,
} from './actions';
import api from '../../../services/api';

function* searchStudent({ payload }) {
  const { name, page } = payload;

  const { data } = yield call(api.get, `/students?name=${name}&page=${page}`);

  return yield put(searchStudentSuccess(data));
}

function* loadStudents() {
  const { data } = yield call(api.get, `/students`);

  return yield put(loadStudentsSuccess(data));
}

function* deleteStudent({ payload }) {
  const { id } = payload;

  yield call(api.delete, `/students/${id}`);

  const { data } = yield call(api.get, '/students');

  return yield put(deleteStudentSuccess(data));
}

function* editStudent({ payload }) {
  const student = yield call(api.put, `/students/${payload.id}`, {
    ...payload,
  });

  const { data } = yield call(api.get, '/students');

  console.tron.log(data);

  return yield put(editStudentSuccess(data));
}

export default all([
  takeLatest('@student/SEARCH_REQUEST', searchStudent),
  takeLatest('@student/LOAD_REQUEST', loadStudents),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
  takeLatest('@student/EDIT_REQUEST', editStudent),
]);
