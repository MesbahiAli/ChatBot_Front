import { FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS } from "../../../../common/state/StatesConstants";

export const fetchMessagesRequest = id => ({
    type: FETCH_MESSAGES_REQUEST,
    payload: id
});

export const fetchMessagesSuccess = data => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: data
});

export const fetchMessagesFailure = error => ({
    type: FETCH_MESSAGES_FAILURE,
    payload: error
});