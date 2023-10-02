export const UPDATE_CHAT_TITLE = "UPDATE_CHAT_TITLE";
export const updateChatTitle = (index, newTitle) => ({
    type: UPDATE_CHAT_TITLE,
    payload: {
        index,
        newTitle
    }
});
