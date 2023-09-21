import { SUMMARIZE_FAILURE, SUMMARIZE_REQUEST, SUMMARIZE_SUCCESS } from "../../../../../common/state/StatesConstants";

const initialState = {
    data: null,
    loading: false,
    error: null
};

export const summarizeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUMMARIZE_REQUEST:
            return { ...state, loading: true };
        case SUMMARIZE_SUCCESS:
            console.log("secces"+action.payload )
            return { ...state, loading: false, data: action.payload.response };
        case SUMMARIZE_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};