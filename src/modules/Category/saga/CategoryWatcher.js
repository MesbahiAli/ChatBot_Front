import { takeLatest } from 'redux-saga/effects';
import { GET_CATEGORY_REQUEST } from '../../../common/state/StatesConstants';
import getCategorySaga from './CategorySaga';

export function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY_REQUEST, getCategorySaga);
}
