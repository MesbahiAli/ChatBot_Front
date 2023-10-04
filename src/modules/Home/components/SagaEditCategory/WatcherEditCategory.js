import { takeLatest } from 'redux-saga/effects';
import { EDIT_CATEGORY_REQUEST } from "../../../../common/state/StatesConstants";
import editCategory from "./SagaEditCategory";

export default function* watchEditCategory() {
    yield takeLatest(EDIT_CATEGORY_REQUEST, editCategory);
}
