import { useState } from "react";
import { getFriendRequestList, getFriendSuggestList } from "@/api";
import { createAlertError } from "@/lib";
import { UserDataTypePopulate, FriendRequestTypePopulate } from "@/types";
import { withAsync } from "@/utils";

export default function useFriend() {
  const [suggestionList, setSuggestionList] = useState<UserDataTypePopulate[]>(
    [],
  );
  const [friendRequestList, setFriendRequestList] = useState<
  FriendRequestTypePopulate[]
  >([]);

  const getSuggestList = async (userId: string) => {
    try {
      if (!userId) return;
      const {
        response: { suggestList },
        error,
      } = await withAsync(() => getFriendSuggestList(userId));
      if (error) throw new Error(error);
      setSuggestionList(suggestList);
    } catch (err) {
      createAlertError(err as Error, "Failed to get friend suggestion list.");
    }
  };

  const getFriendRequest = async (userId: string) => {
    try {
      const {
        response: { friendRequest },
        error,
      } = await withAsync(() => getFriendRequestList(userId));
      setFriendRequestList(friendRequest);
      if (error) throw new Error(error);
    } catch (err) {
      createAlertError(err as Error, "Failed to get friend request.");
    }
  };

  return {
    getSuggestList,
    getFriendRequest,
    suggestionList,
    friendRequestList,
  };
}
