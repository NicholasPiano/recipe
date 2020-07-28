
import { put } from 'redux-saga/effects';

import { fetchResponse } from '../actions';

function* processResponse({ id, response }) {
  yield put(fetchResponse({ id, response }));
}

export default processResponse;
