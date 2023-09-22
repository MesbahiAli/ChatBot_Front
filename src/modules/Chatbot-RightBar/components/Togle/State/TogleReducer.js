import { TOGGLE_FAILURE, TOGGLE_REQUEST, TOGGLE_SUCCESS } from "../../../../../common/state/StatesConstants";

const initialState = {
    toggle: false,
    loading: false,
    error: null
};

export const toggleReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_REQUEST:
            return { ...state, loading: true };
        case TOGGLE_SUCCESS:
            return { ...state, loading: false, toggle: action.payload.toggle };
        case TOGGLE_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};
