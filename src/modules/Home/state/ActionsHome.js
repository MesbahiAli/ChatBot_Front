export const selectChat = ({chat,index}) => ({ type: 'SELECT_CHAT',payload: {chat,index} });
export const selectFile = ({file}) => ({ type: 'SELECT_FILE',payload: file });

// Mouad Doadi - 02/10/23 >
export const UPDATE_CHAT_TITLE = "UPDATE_CHAT_TITLE";

export const updateChatTitle = (index, newTitle) => ({
    type: UPDATE_CHAT_TITLE,
    payload: {
        index,
        newTitle
    }
});
// < 02/10/23