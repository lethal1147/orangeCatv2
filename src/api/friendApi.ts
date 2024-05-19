import { api } from "@/config";
import { endpoints } from "@/constants";

const urls = {
  getSuggest: `${endpoints.friend}/suggest`,
  createSuggest: `${endpoints.friend}/request`,
};

export const getFriendSuggestList = (userId: string) =>
  api.get(`${urls.getSuggest}/${userId}`);
export const getAllFriend = (userId: string) =>
  api.get(`${urls.getSuggest}/${userId}`);
export const createFriendRequest = (
  userId: string,
  body: {
    requestSender: string;
  },
) => api.post(`${urls.createSuggest}/${userId}`, body);
export const getFriendRequestList = (userId: string) =>
  api.get(`${urls.createSuggest}/${userId}`);
