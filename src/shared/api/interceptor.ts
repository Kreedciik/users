import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IResponseData } from "../models/axios.type";
const apiReq = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {},
  params: {},
});

apiReq.interceptors.request.use(
  <T>(config: AxiosRequestConfig<IResponseData<T>> | any) => {
    // const companyToken = Cookies.get(TOKEN.AUTH_TOKEN);
    // config.headers['authorization'] = `Bearer ${companyToken}`;
    return config;
  }
);

apiReq.interceptors.response.use(
  <T>(response: AxiosResponse<IResponseData<T>>) => {
    return response;
  },
  async (err: any) => {
    const unAuthError = true;

    if (err.message === "Network Error") {
      console.log("Network Error");
    }

    if (err?.response?.status === 401) {
      console.log(401);
    }
    if (unAuthError && err?.response?.status === 401) {
      console.log(401);
    } else if (err?.response?.status !== 401) {
      console.log("Network error 2");
    }
    return Promise.reject(err);
  }
);

export default apiReq;
