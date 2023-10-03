import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from '../StateFetchCategoryForm/ActionFetchCategoryForm';
import { ApiFetchCategoryForm } from '../../../../common/services/ServiceFetchCategoryForm';

function* fetchCategories() {
  try {
    const response = yield call(ApiFetchCategoryForm);
    const categories = yield response.json();
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

export default fetchCategories;