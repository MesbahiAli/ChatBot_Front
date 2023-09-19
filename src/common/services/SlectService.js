import { instance } from "../Axios";

export const FileApi1 = (payload) => {
  return instance
    .post("/select", payload)
    .then((response) => {
      return response;
    });
};