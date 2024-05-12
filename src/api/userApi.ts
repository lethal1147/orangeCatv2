import { api } from "@/config";
import { endpoints } from "@/constants";

const urls = {
  login: `${endpoints.user}/login`,
  registerUrl: `${endpoints.user}/create`,
};

export const register = (body: FormData) =>
  api.post(urls.registerUrl, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const login = (body) => api.post(urls.login, body);
