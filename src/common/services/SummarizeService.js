import { instance } from "../Axios";

export const getSummarizedData = (filename, username) => {
  return instance
    .get(`/summarize/${filename}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
