import { takeLatest } from "redux-saga/effects";

import * as ActionsTypes from "../../../common/state/StatesConstants";
import { AuthSaga } from "./AuthSaga";

export default function* AuthWatcher() {
  yield takeLatest(ActionsTypes.AUTH_START, AuthSaga);
}
