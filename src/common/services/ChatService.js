// import axios from 'axios';
// export const ChatApi = (payload) => {
//     const formData = new FormData();
//     formData.append('user_input', payload.user_input);
//     return axios.post("https://flasktest-zcyt.onrender.com/get_response.js", formData)
//       .then((response) => {
//         console.log(response.data);
//         return response.data;
//       })
//       .catch((error) => {
//         console.log(error);
//         throw error;
//       });
//   }



  
import { instance } from "../Axios";

export const ChatApi = (payload) => {
  const formData = new FormData();
  formData.append('user_input', payload.user_input);
    formData.append('conv', payload.conversationId || "");
  return instance
    .post("/response", formData)
    .then((response) => {
      return response.data;
    });
};




 
