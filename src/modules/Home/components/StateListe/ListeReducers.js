import { FETCH_CONVERSATIONS_FAILURE, FETCH_CONVERSATIONS_REQUEST, FETCH_CONVERSATIONS_SUCCESS } from "../../../../common/state/StatesConstants";

const initialState = {
    loading: false,
    conversations: [],
    error: null
};

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONVERSATIONS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_CONVERSATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                conversations: action.payload,
                error: null
            };

        case FETCH_CONVERSATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default conversationReducer;
