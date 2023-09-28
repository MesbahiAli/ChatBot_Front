import { call, put } from 'redux-saga/effects';
import { fetchConversationsFailure, fetchConversationsSuccess } from '../StateListe/ListeAction';
import { getConversationsApi } from '../../../../common/services/conversationService';

function* fetchConversations() {
    try {
        const data = yield call(getConversationsApi);
        yield put(fetchConversationsSuccess(data));
    } catch (error) {
        yield put(fetchConversationsFailure(error.message));
    }
}
export default fetchConversations;
