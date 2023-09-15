import { all } from "redux-saga/effects";
import { watchChat } from "../../modules/Chatbot-RightBar/saga/ChatWatcher";

// all saga's watchers call
export default function* rootSaga() {
  yield all([
    watchChat()
    //....
  ]);
}
