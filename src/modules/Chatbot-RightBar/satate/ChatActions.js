  import * as ActionsTypes from '../../../common/state/StatesConstants';

  export const sendMessageRequest = (message) => ({
    type: ActionsTypes.SEND_MESSAGE_REQUEST,
    payload: { message }
  });

  export const sendMessageSuccess = (message) => ({
    type: ActionsTypes.SEND_MESSAGE_SUCCESS,
    payload: message
  });


  export const sendMessageFailure = (error) => ({
    type: ActionsTypes.SEND_MESSAGE_FAILURE,
    error
  });

export const loadConversation = (conversation) => ({
  type: ActionsTypes.LOAD_CONVERSATION,
  payload: conversation
});
