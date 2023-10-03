import { LOAD_CONVERSATION } from "../../../common/state/StatesConstants";

const initialState = {
  messages: [],
  error: null,
  isLoading: false,
  conversationId: "",
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
        conversationId: action.payload.conversationId || state.conversationId,
      }
    case 'SEND_MESSAGE_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case 'SEND_CHATBOT_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, {
          sender: 'bot',
          text: action.payload,
        }]
      };


    case LOAD_CONVERSATION:
      return {
        ...state,
        messages: action.payload
      };
      case "RESET":
      return {
        messages: []
      };

    default:
      return state;
  }
};

export default chatReducer;
