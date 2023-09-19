import { combineReducers } from "redux";
import chatReducer from "../../modules/Chatbot-RightBar/satate/ChatReducer";
import UploadReducer from "../../modules/Chatbot-SlideBar/state/UploadReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  upload:UploadReducer
});

export default rootReducer;