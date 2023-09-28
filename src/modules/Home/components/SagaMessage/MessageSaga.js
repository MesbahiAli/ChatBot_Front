import { call, put } from 'redux-saga/effects';
import { fetchMessagesFailure, fetchMessagesSuccess } from '../StateMessage/MessageAction';
import { getMessagesApi } from '../../../../common/services/messageService';

function* fetchMessages(action) {
    try {
        const data = yield call(getMessagesApi, action.payload);
        yield put(fetchMessagesSuccess(data));
    } catch (error) {
        yield put(fetchMessagesFailure(error.message));
    }
}

export default fetchMessages;