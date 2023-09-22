import { SEND_FILE_NAMES_FAILURE, SEND_FILE_NAMES_REQUEST, SEND_FILE_NAMES_SUCCESS } from "../../../../common/state/StatesConstants";


export const sendFileNamesRequest = (fileNames) => ({
  type: SEND_FILE_NAMES_REQUEST,
  payload: fileNames,
});

export const sendFileNamesSuccess = () => ({
  type: SEND_FILE_NAMES_SUCCESS,
});

export const sendFileNamesFailure = (error) => ({
  type: SEND_FILE_NAMES_FAILURE,
  payload: error,
});
