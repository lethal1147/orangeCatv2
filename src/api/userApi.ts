import { api } from "@/config";
import { endpoints } from "@/constants";
import { LoginSchemaType } from "@/lib";

const urls = {
  login: `${endpoints.user}/login`,
  logout: `${endpoints.user}/logout`,
  registerUrl: `${endpoints.user}/create`,
  getOne: `${endpoints.user}/getOne`,
  updateCoverImage: `${endpoints.user}/cover`,
};

export const register = (body: FormData) =>
  api.post(urls.registerUrl, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const login = (body: LoginSchemaType) => api.post(urls.login, body);
export const logout = () => api.get(urls.logout, { withCredentials: true });
export const getOneUserById = (userId: string, options = {}) =>
  api.get(`${urls.getOne}/${userId}`, options);
export const updateCoverImage = (userId: string, body: FormData) =>
  api.patch(`${urls.updateCoverImage}/${userId}`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
