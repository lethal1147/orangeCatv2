import { api } from "@/config";
import { endpoints } from "@/constants";
import { LoginSchemaType } from "@/lib";

const urls = {
  login: `${endpoints.user}/login`,
  registerUrl: `${endpoints.user}/create`,
  getOne: `${endpoints.user}/getOne`,
};

export const register = (body: FormData) =>
  api.post(urls.registerUrl, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const login = (body: LoginSchemaType) => api.post(urls.login, body);
export const getOneById = (userId: string, options = {}) =>
  api.get(`${urls.getOne}/${userId}`, options);
