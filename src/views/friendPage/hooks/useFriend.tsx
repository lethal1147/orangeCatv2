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
  const [isSuggestPending, setIsSuggestPending] = useState(true);
  const [isFriendPending, setIsFriendPending] = useState(true);

  const getSuggestList = async (userId: string) => {
    try {
      if (!userId) return;
      const {
        response: { suggestList },
        error,
      } = await withAsync(() => getFriendSuggestList(userId));
      if (error) throw new Error(error);
      setSuggestionList(suggestList);
      setIsSuggestPending(false);
    } catch (err) {
      createAlertError(err as Error, "Failed to get friend suggestion list.");
      setIsSuggestPending(false);
    }
  };

  const getFriendRequest = async (userId: string) => {
    try {
      const {
        response: { friendRequest },
        error,
      } = await withAsync(() => getFriendRequestList(userId));
      if (error) throw new Error(error);
      setFriendRequestList(friendRequest);
      setIsFriendPending(false);
    } catch (err) {
      createAlertError(err as Error, "Failed to get friend request.");
      setIsFriendPending(false);
    }
  };

  // const acceptRequest = async () => {};

  return {
    getSuggestList,
    getFriendRequest,
    suggestionList,
    friendRequestList,
    isSuggestPending,
    isFriendPending,
  };
}
