import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../libs/api';

function* searchStudent({ payload }) {
  const { student } = payload;
}

export default all([takeLatest('@student/SEARCH_REQUEST', searchStudent)]);
