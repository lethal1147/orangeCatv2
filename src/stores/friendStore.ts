import { create } from "zustand";
import {
  acceptFriendRequest,
  createFriendRequest,
  getFriendList,
  getFriendRequestList,
  getFriendSuggestList,
} from "@/api";
import { createAlertError } from "@/lib";
import { FriendRequestTypePopulate, UserDataTypePopulate } from "@/types";
import { withAsync } from "@/utils";

type AddFriendBody = {
  requestSender: string;
};

interface FriendStore {
  suggestionList: UserDataTypePopulate[];
  friendList: UserDataTypePopulate[];
  friendRequestList: FriendRequestTypePopulate[];
  isSuggestPending: boolean;
  isFriendPending: boolean;
  getSuggestList: (userId: string) => Promise<void>;
  getFriendRequest: (userId: string) => Promise<void>;
  acceptRequest: (requestId: string) => Promise<void>;
  getFriendList: (userId: string) => Promise<void>;
  addFriend: (receiverId: string, body: AddFriendBody) => Promise<void>;
}

const useFriendStore = create<FriendStore>((set) => ({
  suggestionList: [],
  friendList: [],
  friendRequestList: [],
  isSuggestPending: true,
  isFriendPending: true,

  getSuggestList: async (userId: string) => {
    try {
      if (!userId) return;
      set({ isSuggestPending: true });
      const {
        response: { data },
        error,
      } = await withAsync(() => getFriendSuggestList(userId));
      if (error) throw new Error(error);
      set({ suggestionList: data, isSuggestPending: false });
    } catch (err) {
      createAlertError(err as Error, "Failed to get friend suggestion list.");
      set({ isSuggestPending: false });
    }
  },

  getFriendRequest: async (userId: string) => {
    try {
      set({ isFriendPending: true });
      const {
        response: { data },
        error,
      } = await withAsync(() => getFriendRequestList(userId));
      if (error) throw new Error(error);
      set({ friendRequestList: data, isFriendPending: false });
    } catch (err) {
      createAlertError(err as Error, "Failed to get friend request.");
      set({ isFriendPending: false });
    }
  },

  acceptRequest: async (requestId: string) => {
    try {
      const {
        response: { data },
        error,
      } = await withAsync(() => acceptFriendRequest(requestId));
      if (error) throw new Error(error);
      console.log(data);
    } catch (err) {
      createAlertError(err as Error, "Failed to accept friend request.");
    }
  },

  getFriendList: async (userId: string) => {
    try {
      const {
        response: { data },
        error,
      } = await withAsync(() => getFriendList(userId));
      if (error) throw new Error(error);
      console.log(data);
    } catch (err) {
      createAlertError(err as Error, "Failed to get friend list.");
    }
  },

  addFriend: async (receiverId: string, body: AddFriendBody) => {
    try {
      const { response, error } = await withAsync(() =>
        createFriendRequest(receiverId, body),
      );
      if (error) throw new Error(error);
      console.log(response);
    } catch (err) {
      createAlertError(err as Error, "Failed to create request.");
    }
  },
}));

export default useFriendStore;
