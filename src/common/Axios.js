import axios from "axios";
import config from "./Config";

const instance = axios.create({
  baseURL: config.url,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { instance };
