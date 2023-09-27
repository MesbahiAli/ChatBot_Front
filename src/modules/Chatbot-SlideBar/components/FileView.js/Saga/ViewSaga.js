// sagas/pdfSaga.js

import { call, put } from 'redux-saga/effects';
import { fetchPdfFailure, fetchPdfSuccess } from '../State/ViewActions';
import { getPdfData } from '../../../../../common/services/ViewService';

function* fetchPdfSaga(action) {
    try {
        const data = yield call(getPdfData, action.payload);
        yield put(fetchPdfSuccess(data));
    } catch (error) {
        yield put(fetchPdfFailure(error.message));
    }
}

export default fetchPdfSaga;