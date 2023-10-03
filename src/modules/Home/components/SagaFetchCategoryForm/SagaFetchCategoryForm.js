import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from '../StateFetchCategoryForm/ActionFetchCategoryForm';
import { ApiFetchCategoryForm } from '../../../../common/services/ServiceFetchCategoryForm';

function* fetchCategories() {
  try {
    const response = yield call(ApiFetchCategoryForm);
    yield put(fetchCategoriesSuccess(response));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

export default fetchCategories;