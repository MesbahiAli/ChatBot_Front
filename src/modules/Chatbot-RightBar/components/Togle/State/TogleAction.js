import { TOGGLE_FAILURE, TOGGLE_REQUEST, TOGGLE_SUCCESS } from "../../../../../common/state/StatesConstants";

export const requestToggle = () => ({
    type: TOGGLE_REQUEST
});

export const toggleSuccess = (data) => ({
    type: TOGGLE_SUCCESS,
    payload: data
});

export const toggleFailure = (error) => ({
    type: TOGGLE_FAILURE,
    error: error
});