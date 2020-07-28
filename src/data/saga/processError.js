
import { put } from 'redux-saga/effects';

import { fetchError } from '../actions';

function* processError({ id, error }) {
  yield put(fetchError({ id, error }));
}

export default processError;
