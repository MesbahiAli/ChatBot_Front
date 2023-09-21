import { instance } from "../Axios";

export const TogleApi = () => {
  return instance
    .get("/toggle")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // Handle the error here if needed
      throw error;
    });
};
