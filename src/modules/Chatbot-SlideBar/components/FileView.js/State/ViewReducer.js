import { FETCH_PDF_FAILURE, FETCH_PDF_REQUEST, FETCH_PDF_SUCCESS } from "../../../../../common/state/StatesConstants";

const initialState = {
    pdf: null,
    loading: false,
    error: null
};

const pdfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PDF_REQUEST:
            return { ...state, loading: true };
        case FETCH_PDF_SUCCESS:
            return { ...state, loading: false, pdf: action.payload };
        case FETCH_PDF_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default pdfReducer;
