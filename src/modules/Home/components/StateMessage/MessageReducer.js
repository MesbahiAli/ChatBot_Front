import { FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS } from "../../../../common/state/StatesConstants";

const initialState = {
    loading: false,
    messages: [],
    error: null
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: action.payload,
                error: null
            };

        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "RESET":
            return {messages:[]};

        default:
            return state;
    }
};

export default messageReducer;
