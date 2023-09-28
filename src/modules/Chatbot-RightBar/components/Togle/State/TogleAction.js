import { TOGGLE_FAILURE, TOGGLE_REQUEST, TOGGLE_SUCCESS } from "../../../../../common/state/StatesConstants";

export const requestToggle = (language) => ({  // <-- Pass in language as an argument
    type: TOGGLE_REQUEST,
    language 
});

export const toggleSuccess = (data) => ({
    type: TOGGLE_SUCCESS,
    payload: data
});

export const toggleFailure = (error) => ({
    type: TOGGLE_FAILURE,
    error: error
});