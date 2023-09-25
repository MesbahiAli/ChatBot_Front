import { takeLatest } from "redux-saga/effects";
import sendFileAndDataSaga from "./CategorySaga";
import { SEND_FILE_AND_DATA_REQUEST } from "../../../common/state/StatesConstants";

export function* watchSendFileAndData() {
    yield takeLatest(SEND_FILE_AND_DATA_REQUEST, sendFileAndDataSaga);
}
