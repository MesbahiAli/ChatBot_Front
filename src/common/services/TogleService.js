import { instance } from "../Axios";

export const setLanguageApi = (language) => {
  return instance
    .get(`/set_language/${language}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
console.log(error+"togle")
      throw error;
    });
};
