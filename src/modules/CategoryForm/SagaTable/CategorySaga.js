import { call, put } from 'redux-saga/effects';
import { getCategoryApi } from '../../../common/services/GetCategoryService';
import { getCategoryFailure, getCategorySuccess } from '../StateTable/CategoryAction';
import { fetchCategoriesRequest } from '../../Home/components/StateFetchCategoryForm/ActionFetchCategoryForm';

function* getCategorySaga() {
  try {
    const response = yield call(getCategoryApi)
    yield put(getCategorySuccess(response));
  } catch (error) {
    yield put(getCategoryFailure(error.message));
  }
}

export default getCategorySaga;
