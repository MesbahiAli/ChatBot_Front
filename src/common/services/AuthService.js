import axios from 'axios';
import { instance } from "../Axios";

export const AuthApi = (payload) => {
  return instance
    .post("/login", payload)
    .then((response) => {
      return response;
    });
};
