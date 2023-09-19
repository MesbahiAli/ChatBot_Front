import { combineReducers } from "redux";
import chatReducer from "../../modules/Chatbot-RightBar/satate/ChatReducer";
import UploadReducer from "../../modules/Chatbot-SlideBar/state/UploadReducer";
import AuthReducer from "../../modules/Authentification/state/AuthReducer";
import dataReducer from "../../modules/files/State/ReducerFile";
import { fileReducer } from "../../modules/Chatbot-SlideBar/SlectedFile/State/ReducerSlect";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  chat: chatReducer,
  upload:UploadReducer,
  Files:dataReducer,
  Selected:fileReducer,
  
});

export default rootReducer;