import axios from 'axios';
export const ChatApi = (payload) => {
    // Create a FormData object to send form data
    const formData = new FormData();
    formData.append('user_input', payload.user_input);
  
    return axios.post("https://flaskbot-9p6j.onrender.com/get_response.js", formData)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
  