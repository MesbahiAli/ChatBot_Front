// api.js (or wherever your API functions are stored)
import { instance } from "../Axios";

export const deleteFileApi = (filename) => {
  return instance
    .get(`/delete/${filename}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
