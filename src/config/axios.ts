import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { devUrl } from "@/constants";
import { handleApiError } from "@/utils";

const axiosParams = {
  baseURL: devUrl.v1,
};

const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  const hasToken = Boolean(localStorage.getItem("token"));
  if (hasToken) {
    const accessToken = localStorage.getItem("token");
    req.headers.authorization = accessToken;
  }
  return req;
});

const api = (axiosIns: AxiosInstance) => ({
  get: (url: string, config = {}) =>
    axiosIns.get(url, config).catch((err) => handleApiError(err)),
  delete: (url: string, config = {}) =>
    axiosIns.delete(url, config).catch((err) => handleApiError(err)),
  post: (url: string, body: object, config = {}) =>
    axiosIns.post(url, body, config).catch((err) => handleApiError(err)),
  patch: (url: string, body: object, config = {}) =>
    axiosIns.patch(url, body, config).catch((err) => handleApiError(err)),
  put: (url: string, body: object, config = {}) =>
    axiosIns.put(url, body, config).catch((err) => handleApiError(err)),
});

export default api(axiosInstance);
