import { TOGGLE_REQUEST } from "../../../../../common/state/StatesConstants";
import { takeLatest } from "redux-saga/effects";
import fetchToggle from "./TogleSaga";

export function* watchToggleRequest() {
    yield takeLatest(TOGGLE_REQUEST, fetchToggle); 
}
