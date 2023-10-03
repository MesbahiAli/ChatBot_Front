import { DELETE_CONVERSATION_FAILURE, DELETE_CONVERSATION_REQUEST, DELETE_CONVERSATION_SUCCESS } from "../../../../common/state/StatesConstants";

const initialDeleteState = {
    loading: false,
    error: null
};

const deleteReducer = (state = initialDeleteState, action) => {
    switch (action.type) {
        case DELETE_CONVERSATION_REQUEST:
            return { ...state, loading: true };
        case DELETE_CONVERSATION_SUCCESS:
            return { ...state, loading: false };
        case DELETE_CONVERSATION_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default deleteReducer;
