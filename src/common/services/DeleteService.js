import { instance } from "../Axios";

export const deleteFileApi = (filename) => {
  return instance
    .delete(`/delete/${filename}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
