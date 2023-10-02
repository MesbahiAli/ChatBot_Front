import { UPDATE_CHAT_TITLE } from './ActionFile';

const initialState = {
    // Your initial state here
};

const updateTitleReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CHAT_TITLE:
            // Handle your state update logic here
            return state;  // Updated state
        default:
            return state;
    }
}

export default updateTitleReducer;
