export const editConversationSuccess = (data) => ({
    type: EDIT_CONVERSATION_SUCCESS,
    payload: data
});

export const editConversationFailure = (error) => ({
    type: EDIT_CONVERSATION_FAILURE,
    payload: error
});