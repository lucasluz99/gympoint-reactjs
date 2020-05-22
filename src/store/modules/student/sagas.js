import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  searchStudentSuccess,
  updateStudentsSuccess,
  updatePageSuccess,
} from './actions';
import api from '../../../services/api';

function* searchStudent({ payload }) {
  const { name, page } = payload;

  const { data } = yield call(api.get, `/students?name=${name}&page=${page}`);

  return yield put(searchStudentSuccess({ data, name }));
}

function* loadStudents() {
  const { data } = yield call(api.get, `/students`);

  return yield put(updateStudentsSuccess(data));
}

function* deleteStudent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/students/${id}`);

    const { data } = yield call(api.get, '/students');

    toast.success('Usuário deletado com sucesso');
    return yield put(updateStudentsSuccess(data));
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
    return yield put(updateStudentsSuccess(data));
  } catch (err) {
    toast.error(
      'Não foi possível editar este usuário verifique os dados ou tente novamente mais tarde'
    );
  }
}

function* newStudent({ payload }) {
  try {
    const student = yield call(api.post, '/students', { ...payload.data });

    const { data } = yield call(api.get, '/students');

    toast.success('Usuário cadastrado com sucesso');
    return yield put(updateStudentsSuccess(data));
  } catch (err) {
    if (err.response.data.error === 'This email is already in use') {
      return toast.error('Este email já existe');
    }

    return toast.error('Ocorreu algum erro,tente novamente mais tarde');
  }
}

function* updatePage({ payload }) {
  try {
    const { page } = payload;
    const student = yield select((state) => state.student.student);
    const { data } = yield call(
      api.get,
      `/students?page=${page}&name=${student}`
    );

    yield put(updateStudentsSuccess(data));
    return yield put(updatePageSuccess(page));
  } catch (err) {
    return toast.error('Ocorreu algum erro,tente novamente mais tarde');
  }
}

export default all([
  takeLatest('@student/SEARCH_REQUEST', searchStudent),
  takeLatest('@student/LOAD_REQUEST', loadStudents),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
  takeLatest('@student/EDIT_REQUEST', editStudent),
  takeLatest('@student/NEW_REQUEST', newStudent),
  takeLatest('@student/UPDATE_PAGE_REQUEST', updatePage),
]);
