const initialState = {
    loading: false,
    chat: null,
    index:-1,
    error: null,
    file:null
  };

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CHAT':
      return { ...state, chat: action.payload.chat,index:action.payload.index };
    case 'SELECT_FILE':
      return { ...state, file:action.payload };
    default :
      return state;
  }
};

export const selectCurrentChat = (state) => state.home.chat;
export const selectCurrentIndex = (state) => state.home.index;
export const selectCurrentFile = (state) => state.home.file;
export default homeReducer;