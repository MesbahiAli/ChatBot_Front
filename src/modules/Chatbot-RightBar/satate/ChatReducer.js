const initialState = {
  messages: [],
  error: null,
  isLoading: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
      case 'SEND_MESSAGE_SUCCESS':
        return {
            ...state,
            messages: [
                ...state.messages,
                action.payload,
            ],
            isLoading: false,
            error: null,
        };
      
    case 'SEND_MESSAGE_FAILURE':
          return {
            ...state,
            isLoading: false,
            error: action.error,
          };
    default:
      return state;
  }
};

export default chatReducer;
