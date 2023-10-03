import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "../../../../common/state/StatesConstants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
