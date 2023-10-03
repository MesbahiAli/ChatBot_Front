import { DELETE_CONVERSATION_FAILURE, DELETE_CONVERSATION_REQUEST, DELETE_CONVERSATION_SUCCESS } from "../../../../common/state/StatesConstants";

export const deleteConversationRequest = (id) => ({ type: DELETE_CONVERSATION_REQUEST, payload: id });
export const deleteConversationSuccess = () => ({ type: DELETE_CONVERSATION_SUCCESS });
export const deleteConversationFailure = (error) => ({ type: DELETE_CONVERSATION_FAILURE, payload: error });