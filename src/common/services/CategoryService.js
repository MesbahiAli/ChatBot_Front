import { instance } from "../Axios";

export const sendFileAndDataApi = (payload) => {
  return instance
    .post('/upload', payload)
    .then((response) => {
      return response.data; 
    })
    .catch((error) => {
      throw error;
    });
};
