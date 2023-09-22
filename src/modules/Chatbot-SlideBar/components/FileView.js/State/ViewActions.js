import { FETCH_PDF_FAILURE, FETCH_PDF_REQUEST, FETCH_PDF_SUCCESS } from "../../../../../common/state/StatesConstants";

export const fetchPdfRequest = (filename) => ({
    type: FETCH_PDF_REQUEST,
    payload: filename
});

export const fetchPdfSuccess = (data) => ({
    type: FETCH_PDF_SUCCESS,
    payload: data
});

export const fetchPdfFailure = (error) => ({
    type: FETCH_PDF_FAILURE,
    payload: error
});