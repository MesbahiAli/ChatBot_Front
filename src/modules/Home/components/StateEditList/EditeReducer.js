import { EDIT_CONVERSATION_FAILURE, EDIT_CONVERSATION_REQUEST, EDIT_CONVERSATION_SUCCESS } from "../../../../common/state/StatesConstants";

const initialEditState = {
    loading: false,
    error: null
};

const editReducer = (state = initialEditState, action) => {
    switch (action.type) {
        case EDIT_CONVERSATION_REQUEST:
            return { ...state, loading: true };
        case EDIT_CONVERSATION_SUCCESS:
            return { ...state, loading: false };
        case EDIT_CONVERSATION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default editReducer;
