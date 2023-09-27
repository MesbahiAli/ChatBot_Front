import { call, put } from 'redux-saga/effects';
import { getCategoryApi } from '../../../common/services/GetCategoryService';
import { getCategoryFailure, getCategorySuccess } from '../state/CategoryAction';

function* getCategorySaga() {
  try {
    const response = {data:"ali mesbahi"} 
    yield put(getCategorySuccess(response.data));
  } catch (error) {
    yield put(getCategoryFailure(error.message));
  }
}

export default getCategorySaga;
