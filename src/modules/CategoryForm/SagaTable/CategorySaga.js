import { call, put } from 'redux-saga/effects';
import { getCategoryApi } from '../../../common/services/GetCategoryService';
import { getCategoryFailure, getCategoryRequest, getCategorySuccess } from '../StateTable/CategoryAction';

function* getCategorySaga() {
  try {
    const response = yield call(getCategoryApi)
    yield put(getCategorySuccess(response));
  } catch (error) {
    yield put(getCategoryFailure(error.message));
  }
}

export default getCategorySaga;
