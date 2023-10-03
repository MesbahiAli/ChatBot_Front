import { editConversationApi } from "../../../../common/services/ConversationEditService";
import { editConversationFailure, editConversationSuccess } from "../StateEditList/EditeActions";
import { call, put } from 'redux-saga/effects';
import { fetchConversationsRequest } from "../StateListe/ListeAction";

function* handleEdit(action) {
    try {
        yield call(editConversationApi, action.payload);
        yield put(editConversationSuccess());
        yield put(fetchConversationsRequest())

    } catch (error) {
        yield put(editConversationFailure(error.message));
    }
}
export default handleEdit;