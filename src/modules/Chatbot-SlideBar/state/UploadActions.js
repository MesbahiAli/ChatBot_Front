import { DELETE_FILE, UPLOAD_FILES, SEND_FILES_TO_SERVER } from "../../../common/state/StatesConstants";

export const uploadFiles = (files) => ({
  type: UPLOAD_FILES,
  payload: files
});

export const deleteFile = (fileName) => ({
  type: DELETE_FILE,
  payload: fileName
});

export const sendFilesToServer = () => ({
  type: SEND_FILES_TO_SERVER
});
