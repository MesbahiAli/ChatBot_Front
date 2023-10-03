import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "../../../../common/state/StatesConstants";

export const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
  });
  
  export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  });
  
  export const fetchCategoriesFailure = (error) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  });