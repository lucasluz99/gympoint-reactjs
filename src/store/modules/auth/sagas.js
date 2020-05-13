import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/session', { email, password });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/students');
  } catch (err) {
    yield put(signInFailure());
    toast.error('Email ou senha incorretos');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
