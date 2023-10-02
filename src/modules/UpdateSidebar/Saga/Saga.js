import { call, put } from 'redux-saga/effects';
import { updateChatTitleService } from '../../../common/services/UpdateSidebarService';

export function* updateChatTitleSaga(action) {
    try {
        const response = yield call(updateChatTitleService, action.payload.index, action.payload.newTitle);
        
        if (response.status === 200) {
            // Dispatch success action if needed
            // For example: put(updateChatTitleSuccessAction())
        } else {
            // Handle errors if needed
            // For example: put(updateChatTitleFailureAction())
        }
    } catch (error) {
        console.error("Error updating chat title:", error);
        // Dispatch error action if needed
        // For example: put(updateChatTitleErrorAction())
    }
}
