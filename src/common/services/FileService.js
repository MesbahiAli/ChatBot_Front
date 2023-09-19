import { instance } from "../Axios";

export const FileApi = (payload) => {
  return instance
    .get("/list-directory", payload)
    .then((response) => {
      return response;
    });
};