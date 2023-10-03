import { deleteConversationApi } from "../../../../common/services/ConversationDeleteService";
import { deleteConversationFailure, deleteConversationSuccess } from "../StateDeleteList/DeleteAction";
import { call, put } from 'redux-saga/effects';
import { fetchConversationsRequest } from "../StateListe/ListeAction";

function* handleDelete(action) {
    try {
        yield call(deleteConversationApi, action.payload);
        yield put(deleteConversationSuccess());
        yield put(fetchConversationsRequest())

    } catch (error) {
        yield put(deleteConversationFailure(error.message));
    }
}
export default handleDelete;