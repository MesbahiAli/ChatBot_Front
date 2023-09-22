import { call, put } from 'redux-saga/effects';
import * as actions from '../satate/ChatActions';
import { ChatApi } from "../../../common/services/ChatService";

export function* sendMessageSaga(action) {
  try {
    const response = yield call(ChatApi, { user_input: action.payload.user_input });

    const botMessage = response.response;

    yield put(actions.sendMessageSuccess({ sender: 'bot', text: botMessage }));
  } catch (error) {
    const errorMessage = error.message || "An unknown error occurred.";
    yield put(actions.sendMessageFailure(errorMessage));
}
}
