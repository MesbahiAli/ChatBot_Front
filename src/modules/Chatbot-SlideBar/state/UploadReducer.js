import { CLEAR_UPLOADED_FILES, DELETE_FILE, UPLOAD_FILES } from "../../../common/state/StatesConstants";

const initialState = {
  files: []
};

const UploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILES:
      return { ...state, files: [...state.files, ...action.payload] };
    case DELETE_FILE:
      return { ...state, files: state.files.filter(file => file.name !== action.payload) };
    case CLEAR_UPLOADED_FILES:
      return { ...state, files: [] };
    default:
      return state;
  }
};

export default UploadReducer;
