import { put, call, } from 'redux-saga/effects';
import { summarizeFailure, summarizeSuccess } from '../State/SummarizeActions';
import { getSummarizedData } from '../../../../../common/services/SummarizeService';

function* fetchSummarizedData(action) {
    const { filename } = action.payload;
    try {
        const data = yield call(getSummarizedData, filename);
        yield put(summarizeSuccess(data));
    } catch (error) {
        yield put(summarizeFailure(error));
    }
}
export default fetchSummarizedData;