import { FETCH_CONVERSATIONS_FAILURE, FETCH_CONVERSATIONS_REQUEST, FETCH_CONVERSATIONS_SUCCESS } from "../../../../common/state/StatesConstants";

// Action Creators
export const fetchConversationsRequest = () => ({
    type: FETCH_CONVERSATIONS_REQUEST
});

export const fetchConversationsSuccess = data => ({
    type: FETCH_CONVERSATIONS_SUCCESS,
    payload: data
});

export const fetchConversationsFailure = error => ({
    type: FETCH_CONVERSATIONS_FAILURE,
    payload: error
});
