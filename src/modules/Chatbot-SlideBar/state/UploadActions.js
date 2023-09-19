import { DELETE_FILE, UPLOAD_FILES } from "../../../common/state/StatesConstants";

export const uploadFiles = (files) => ({
  type: UPLOAD_FILES,
  payload: files
});

export const deleteFile = (fileName) => ({
  type: DELETE_FILE,
  payload: fileName
});
