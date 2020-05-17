import { takeLatest, call, put, all } from 'redux-saga/effects';

function* searchStudent({ payload: { student } }) {}

export default all([takeLatest('@student/SEARCH_REQUEST', searchStudent)]);
