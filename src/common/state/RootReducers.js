import { combineReducers } from "redux";
import chatReducer from "../../modules/Chatbot-RightBar/satate/ChatReducer";
import UploadReducer from "../../modules/Chatbot-SlideBar/state/UploadReducer";
import AuthReducer from "../../modules/Authentification/state/AuthReducer";
import dataReducer from "../../modules/files/State/ReducerFile";
import { fileReducer } from "../../modules/Chatbot-SlideBar/SlectedFile/State/ReducerSlect";
import { toggleReducer } from "../../modules/Chatbot-RightBar/components/Togle/State/TogleReducer";
import { summarizeReducer } from "../../modules/Chatbot-RightBar/components/Summarize/State/SummarizeReducers";
import pdfReducer from "../../modules/Chatbot-SlideBar/components/FileView.js/State/ViewReducer";
import { categoryReducer } from "../../modules/Category/state/CategoryReducer";


const rootReducer = combineReducers({
  Auth: AuthReducer,
  chat: chatReducer,
  upload:UploadReducer,
  Files:dataReducer,
  Selected:fileReducer,
  Togle:toggleReducer,
  Summarize:summarizeReducer,
  Pdf:pdfReducer,
  FilCategory:fileReducer,
  Category:categoryReducer

  
});

export default rootReducer;