import { UPLOAD_FILES, SEND_FILES_TO_SERVER, CLEAR_UPLOADED_FILES, TOGGLE_SIDEBAR } from "../../../common/state/StatesConstants";

export const uploadFiles = (files) => ({
  type: UPLOAD_FILES,
  payload: files
});

export const sendFilesToServer = () => ({
  type: SEND_FILES_TO_SERVER
});

export const clearUploadedFiles = () => ({
  type: CLEAR_UPLOADED_FILES
});

export const toggleSidebarClick = () => ({
  type: TOGGLE_SIDEBAR
});