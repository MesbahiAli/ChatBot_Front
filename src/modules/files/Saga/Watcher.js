import { takeEvery, call } from 'redux-saga/effects';
import fetchData from './Saga';
import { FETCH_DATA_REQUEST } from '../../../common/state/StatesConstants';

export function* watchFetchData() {
    yield takeEvery(FETCH_DATA_REQUEST, fetchData);
  }
  