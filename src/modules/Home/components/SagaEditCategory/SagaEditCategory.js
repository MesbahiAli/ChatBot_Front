import { call, put } from 'redux-saga/effects';
import { editCategoryFailure, editCategorySuccess } from '../StateEditCategory/ActionsEditCategory';
import { editCategoryEdit } from '../../../../common/services/editCategoryService';
import { getCategoryRequest } from '../../../CategoryForm/StateTable/CategoryAction';

function* editCategory(action) {
    try {
        const response = yield call(editCategoryEdit, action.payload);
        yield put(editCategorySuccess(response.data));
        yield put(getCategoryRequest())
    } catch (error) {
        yield put(editCategoryFailure(error.message));
    }
}

export default editCategory;
