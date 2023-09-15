import { updateObject } from "../../../common/utils/UpdateObjectUtility";
import * as ActionsTypes from "../../../common/state/StatesConstants";

const initialState = {
  messages: [],
  error: null,
  isLoading: false,
};

const sendMessageStart = (state) => {
  return updateObject(state, {
    error: null,
    isLoading: true,
  });
};

const sendMessageSuccess = (state, action) => {
  return updateObject(state, {
    messages: [...state.messages, { sender: 'bot', text: action.response }],
    isLoading: false,
    error: null,
  });
};

const sendMessageFail = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: action.error.message,
  });
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SEND_MESSAGE_REQUEST:
      return sendMessageStart(state, action);
    case ActionsTypes.SEND_MESSAGE_SUCCESS:
      return sendMessageSuccess(state, action);
    case ActionsTypes.SEND_MESSAGE_FAILURE:
      return sendMessageFail(state, action);
    default:
      return state;
  }
};

export default chatReducer;
