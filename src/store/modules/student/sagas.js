import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
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
  try {
    const { id } = payload;

    yield call(api.delete, `/students/${id}`);

    const { data } = yield call(api.get, '/students');

    toast.success('Usuário deletado com sucesso');
    return yield put(deleteStudentSuccess(data));
  } catch (err) {
    return toast.error('Id inválido,tente novamente');
  }
}

function* editStudent({ payload }) {
  try {
    const student = yield call(api.put, `/students/${payload.id}`, {
      ...payload,
    });

    const { data } = yield call(api.get, '/students');

    toast.success('Usuário editado com sucesso');
    return yield put(editStudentSuccess(data));
  } catch (err) {
    toast.error(
      'Não foi possível editar este usuário verifique os dados ou tente novamente mais tarde'
    );
  }
}

export default all([
  takeLatest('@student/SEARCH_REQUEST', searchStudent),
  takeLatest('@student/LOAD_REQUEST', loadStudents),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
  takeLatest('@student/EDIT_REQUEST', editStudent),
]);
