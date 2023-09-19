import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { LOGIN_REQUEST, loginSuccess, loginFailure } from "../actions/auth";

function* authenticateUser(action) {
  try {
    // const response = yield call(axios.post, "", action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

export function* watchAuthenticateUser() {
  yield takeEvery(LOGIN_REQUEST, authenticateUser);
}