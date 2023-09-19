import * as ActionTypes from "../../../common/state/StatesConstants";

export const uploadFiles = (files) => ({
  type: ActionTypes.UPLOAD_FILES,
  payload: files
});

export const sendFilesToServer = () => ({
  type: ActionTypes.SEND_FILES_TO_SERVER
});
