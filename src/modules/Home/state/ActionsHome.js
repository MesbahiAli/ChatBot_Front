export const selectChat = ({chat,index}) => ({ type: 'SELECT_CHAT',payload: {chat,index} });
export const selectFile = ({file}) => ({ type: 'SELECT_FILE',payload: file });
export const reset = () => ({ type: 'RESET'});
