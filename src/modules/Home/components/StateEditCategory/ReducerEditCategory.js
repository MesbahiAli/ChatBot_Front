import { EDIT_CATEGORY_FAILURE, EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS } from "../../../../common/state/StatesConstants";

const initialState = {
    categories: [],
    loading: false,
    error: null
};

const categoryEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_CATEGORY_REQUEST:
            return { ...state, loading: true, error: null };
        case EDIT_CATEGORY_SUCCESS:
            return { ...state, loading: false, categories: action.payload };
        case EDIT_CATEGORY_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default categoryEditReducer;
