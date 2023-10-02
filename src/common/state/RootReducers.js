import { combineReducers } from "redux";
import chatReducer from "../../modules/Chatbot-RightBar/satate/ChatReducer";
import UploadReducer from "../../modules/Chatbot-SlideBar/state/UploadReducer";
import AuthReducer from "../../modules/Authentification/state/AuthReducer";
import dataReducer from "../../modules/files/State/ReducerFile";
import { fileReducer } from "../../modules/Chatbot-SlideBar/SlectedFile/State/ReducerSlect";
import { toggleReducer } from "../../modules/Chatbot-RightBar/components/Togle/State/TogleReducer";
import { summarizeReducer } from "../../modules/Chatbot-RightBar/components/Summarize/State/SummarizeReducers";
import pdfReducer from "../../modules/Chatbot-SlideBar/components/FileView.js/State/ViewReducer";
import { SendFileReducer } from "../../modules/CategoryForm/state/CategoryReducer";
import { categoryReducer } from "../../modules/CategoryForm/StateTable/CategoryReducer";

import homeReducer from "../../modules/Home/state/ReducerHome";
import conversationReducer from "../../modules/Home/components/StateListe/ListeReducers";
import messageReducer from "../../modules/Home/components/StateMessage/MessageReducer";
import updateTitleReducer from "../../modules/UpdateSidebar/State/ReducerFile";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  chat: chatReducer,
  upload:UploadReducer,
  Files:dataReducer,
  Selected:fileReducer,
  Togle:toggleReducer,
  Summarize:summarizeReducer,
  Pdf:pdfReducer,
  home:homeReducer,
  FilCategory:SendFileReducer,
  FilCategory:fileReducer,
  Category:categoryReducer,
  listItem:conversationReducer,
  MessageList:messageReducer,
  updateTitle: updateTitleReducer,
  
});

export default rootReducer;