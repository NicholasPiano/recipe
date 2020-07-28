
import { call } from 'redux-saga/effects';

import fetchFromRecipePuppy from './fetchFromRecipePuppy';
import processError from './processError';
import processResponse from './processResponse';

function* processFetch(action) {
  const { id, ...rest } = action.payload;

  const { response, error } = yield call(fetchFromRecipePuppy, { ...rest });

  if (error) {
    return call(processError, { id, error });
  }

  yield call(processResponse, { id, response });
}

export default processFetch;
