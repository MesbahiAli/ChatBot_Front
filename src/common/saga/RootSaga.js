import { all } from "redux-saga/effects";
import { watchChat } from "../../modules/Chatbot-RightBar/saga/ChatWatcher";
import watchUploadFiles from "../../modules/Chatbot-SlideBar/Saga/WatcherSaga";
import AuthWatchar from "../../modules/Authentification/saga/AuthWatcher";

export default function* rootSaga() {
  yield all([
    AuthWatchar(),
    watchChat(),
    watchUploadFiles()
  ]);
}
