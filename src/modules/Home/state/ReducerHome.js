const initialState = {
    loading: false,
    chat: null,
    index:-1,
    error: null,
    file:null,
    isSidebarOpen:true
  };

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CHAT':
      return { ...state, chat: action.payload.chat,index:action.payload.index };
    case 'SELECT_FILE':
      return { ...state, file:action.payload };
    case 'SIDEBAR_TRIGGER':
      return { ...state, isSidebarOpen:action.payload };
    default :
      return state;
  }
};

export const selectCurrentChat = (state) => state.home.chat;
export const selectCurrentIndex = (state) => state.home.index;
export const selectCurrentFile = (state) => state.home.file;
export const selectSidebarOpen = (state) => state.home.isSidebarOpen;
export default homeReducer;