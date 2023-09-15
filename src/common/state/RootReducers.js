import { combineReducers } from "redux";
import chatReducer from "../../modules/Chatbot-RightBar/satate/ChatReducer";

const rootReducer = combineReducers({
  chat: chatReducer
  //....
});

export default rootReducer;