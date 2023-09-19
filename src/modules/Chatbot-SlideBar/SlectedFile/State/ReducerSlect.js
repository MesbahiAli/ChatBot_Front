// fileReducer.js

import { SEND_FILE_NAMES_FAILURE, SEND_FILE_NAMES_REQUEST, SEND_FILE_NAMES_SUCCESS } from "../../../../common/state/StatesConstants";


  
  const initialState = {
    isLoading: false,
    error: null,
  };
  
  export const fileReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEND_FILE_NAMES_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case SEND_FILE_NAMES_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case SEND_FILE_NAMES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  