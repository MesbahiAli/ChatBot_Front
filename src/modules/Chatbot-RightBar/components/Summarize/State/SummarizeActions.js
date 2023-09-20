import { SUMMARIZE_FAILURE, SUMMARIZE_REQUEST, SUMMARIZE_SUCCESS } from "../../../../../common/state/StatesConstants";

export const requestSummarize = (filename) => ({
    type: SUMMARIZE_REQUEST,
    payload: { filename  }
});

export const summarizeSuccess = (data) => ({
    type: SUMMARIZE_SUCCESS,
    payload: data
});

export const summarizeFailure = (error) => ({
    type: SUMMARIZE_FAILURE,
    error: error
});