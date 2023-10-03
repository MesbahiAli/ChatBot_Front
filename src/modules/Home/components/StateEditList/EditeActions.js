import { EDIT_CONVERSATION_FAILURE, EDIT_CONVERSATION_REQUEST, EDIT_CONVERSATION_SUCCESS } from "../../../../common/state/StatesConstants";

export const editConversationRequest = (payload) => ({ type: EDIT_CONVERSATION_REQUEST, payload });
export const editConversationSuccess = () => ({ type: EDIT_CONVERSATION_SUCCESS });
export const editConversationFailure = (error) => ({ type: EDIT_CONVERSATION_FAILURE, payload: error });