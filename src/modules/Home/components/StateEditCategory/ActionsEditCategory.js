import { EDIT_CATEGORY_FAILURE, EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS } from "../../../../common/state/StatesConstants";

export const editCategory = (data) => ({
    type: EDIT_CATEGORY_REQUEST,
    payload: data
});

export const editCategorySuccess = (data) => ({
    type: EDIT_CATEGORY_SUCCESS,
    payload: data
});

export const editCategoryFailure = (error) => ({
    type: EDIT_CATEGORY_FAILURE,
    payload: error
});
