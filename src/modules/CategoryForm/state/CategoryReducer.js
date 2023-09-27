import {
  SEND_FILE_AND_DATA_FAILURE,
  SEND_FILE_AND_DATA_REQUEST,
  SEND_FILE_AND_DATA_SUCCESS,
} from '../../../common/state/StatesConstants';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

export const SendFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_FILE_AND_DATA_REQUEST:
      return { loading: true, error: null, success: false };
    case SEND_FILE_AND_DATA_SUCCESS:
      return { loading: false, error: null, success: true };
    case SEND_FILE_AND_DATA_FAILURE:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
