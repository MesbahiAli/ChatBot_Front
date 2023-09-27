import {
  SEND_FILE_AND_DATA_FAILURE,
  SEND_FILE_AND_DATA_REQUEST,
  SEND_FILE_AND_DATA_SUCCESS,
} from '../../../common/state/StatesConstants';


export const sendFileAndData = (data, file) => {
  return {
    type: SEND_FILE_AND_DATA_REQUEST,
    payload: { data, file },
  };
};


export const sendFileAndDataSuccess = (response) => {
  return {
    type: SEND_FILE_AND_DATA_SUCCESS,
    payload: response,
  };
};

export const sendFileAndDataFailure = (error) => {
  return {
    type: SEND_FILE_AND_DATA_FAILURE,
    payload: error,
  };
};
