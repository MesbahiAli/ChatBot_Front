import { SUMMARIZE_REQUEST } from "../../../../../common/state/StatesConstants";
import fetchSummarizedData from "./SummarizeSaga";
import { takeLatest } from "redux-saga/effects";

export function* watchSummarizeRequest() {
    yield takeLatest(SUMMARIZE_REQUEST, fetchSummarizedData);
}