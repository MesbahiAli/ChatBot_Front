import { put, call, } from 'redux-saga/effects';
import { summarizeFailure, summarizeSuccess } from '../State/SummarizeActions';
import { getSummarizedData } from '../../../../../common/services/SummarizeService';
import { SEND_MESSAGE_SUCCESS } from '../../../../../common/state/StatesConstants';


function* fetchSummarizedData(action) {
    const { filename } = action.payload;
    try {
        const data = yield call(getSummarizedData, filename);
        yield put(summarizeSuccess(data));
        yield put({
            type: SEND_MESSAGE_SUCCESS,
            payload: {
                sender: 'bot',
                text: data.response
            }
        });
    } catch (error) {
        yield put(summarizeFailure(error));
    }
}
export default fetchSummarizedData;




