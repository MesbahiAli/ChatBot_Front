import { takeEvery } from 'redux-saga/effects';
import fetchPdfSaga from './ViewSaga';
import { FETCH_PDF_REQUEST } from '../../../../../common/state/StatesConstants';

export default function* watchPdfSaga() {
    yield takeEvery(FETCH_PDF_REQUEST, fetchPdfSaga);
}
