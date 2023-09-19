import { all } from "redux-saga/effects";
import { watchChat } from "../../modules/Chatbot-RightBar/saga/ChatWatcher";
import watchUploadFiles from "../../modules/Chatbot-SlideBar/components/Saga/WatcherSaga";

// all saga's watchers call
export default function* rootSaga() {
  yield all([
    watchChat(),
    watchUploadFiles()
  ]);
}
