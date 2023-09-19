import { combineReducers } from "redux";
import chatReducer from "../../modules/Chatbot-RightBar/satate/ChatReducer";
import UploadReducer from "../../modules/Chatbot-SlideBar/state/UploadReducer";
import AuthReducer from "../../modules/Authentification/state/AuthReducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  chat: chatReducer,
  upload:UploadReducer
});

export default rootReducer;