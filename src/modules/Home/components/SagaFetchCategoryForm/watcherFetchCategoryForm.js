import { FETCH_CATEGORIES_REQUEST } from "../../../../common/state/StatesConstants";
import fetchCategories from "./SagaFetchCategoryForm";
import { takeLatest } from 'redux-saga/effects';

export function* watchFetchCategories() {
    yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategories);
  }
  