const initialState = {
    loading: false,
    chat: null,
    index:-1,
    error: null,
  };

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CHAT':
      return { ...state, chat: action.payload.chat,index:action.payload.index };
    default :
      return state;
  }
};

export const selectCurrentChat = (state) => state.home.chat;
export const selectCurrentIndex = (state) => state.home.index;
export default homeReducer;