  import axios from "axios";
  import config from "./Config";

  const instance = axios.create({
    baseURL: config.url
  });

  // instance.interceptors.request.use(config => {
  //   config.headers.authorization = "Bearer " + localStorage.getItem("token");
  //   return config;
  // },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );

  export { instance };