import { all } from "redux-saga/effects";
import { watchChat } from "../../modules/Chatbot-RightBar/saga/ChatWatcher";
import AuthWatchar from "../../modules/Authentification/saga/AuthWatcher";
import watchUploadFiles from "../../modules/Chatbot-SlideBar/Saga/WatcherSaga"
import { watchFetchData } from "../../modules/files/Saga/Watcher";
import { watchSendFileNamesSaga } from "../../modules/Chatbot-SlideBar/SlectedFile/Saga/SelectWatcher";
import { watchToggleRequest } from "../../modules/Chatbot-RightBar/components/Togle/Saga/TogleWatcher";
import { watchSummarizeRequest } from "../../modules/Chatbot-RightBar/components/Summarize/Saga/SummarizeWatcher";

export default function* rootSaga() {
  yield all([
    AuthWatchar(),
    watchChat(),
    watchUploadFiles(),
    watchFetchData(),
    watchSendFileNamesSaga(),
    watchToggleRequest(),
    watchSummarizeRequest()
  ]);
}