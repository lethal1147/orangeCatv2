/* eslint-disable react/jsx-indent */
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { renderBase64AsSrc } from "@/utils";
import { useAuthStore, useFriendStore } from "@/stores";
import FriendSkeleton from "./components/friendSkeleton";
import { useApi } from "@/hooks";
import { apiStatus } from "@/constants";
import { Loader } from "@/components";

export default function FriendPage() {
  const { userData } = useAuthStore();
  const {
    acceptRequest,
    getSuggestList,
    isFriendPending,
    isSuggestPending,
    suggestionList,
    getFriendRequest,
    friendRequestList,
    getFriendList,
    addFriend,
  } = useFriendStore();
  const { setStatus, isPending } = useApi();

  useEffect(() => {
    if (!userData?._id) return;
    getSuggestList(userData?._id);
    getFriendRequest(userData?._id);
    getFriendList(userData?._id);
  }, [userData?._id]);

  const acceptFriendRequest = async (requestId: string) => {
    setStatus(apiStatus.pending);
    await acceptRequest(requestId);
    setStatus(apiStatus.success);
  };

  return (
    <div className="m-10 w-full text-gray-text">
      {isPending && <Loader />}
      <h2 className="my-10 text-start text-xl font-bold">Friend requests</h2>
      <div className="grid grid-cols-6 gap-10">
        {isFriendPending
          ? Array(6)
              .fill({})
              .map((_, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <FriendSkeleton key={idx} />
              ))
          : friendRequestList.map((user) => (
              <Card
                className="col-span-1 flex h-80 flex-col overflow-hidden text-gray-text"
                key={user._id}
              >
                <CardHeader className="h-36 w-full p-0">
                  <img
                    className="size-full"
                    src={renderBase64AsSrc(
                      user.requestSender.profileImageId.image,
                      user.requestSender.profileImageId.imageType,
                    )}
                    alt="User's profile"
                  />
                </CardHeader>
                <CardContent className="my-auto flex h-16 w-full items-center py-0 font-bold">
                  <p>
                    {user.requestSender.firstName} {user.requestSender.lastName}
                  </p>
                </CardContent>
                <CardFooter className=" flex grow flex-col gap-2 px-3 py-0 ">
                  <Button
                    onClick={() => acceptFriendRequest(user._id)}
                    className="my-auto w-full font-bold"
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outline"
                    className="my-auto w-full bg-gray-stroke font-bold hover:bg-gray-stroke/80"
                  >
                    Cancel
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>
      <h2 className="my-10 text-start text-xl font-bold">Friend suggestions</h2>
      <div className="grid grid-cols-6 gap-10">
        {isSuggestPending
          ? Array(6)
              .fill({})
              // eslint-disable-next-line react/no-array-index-key
              .map((_, idxSug) => <FriendSkeleton key={idxSug} />)
          : suggestionList.map((user) => (
              <Card
                className="col-span-1 flex h-72 flex-col overflow-hidden text-gray-text"
                key={user._id}
              >
                <CardHeader className="h-36 w-full p-0">
                  <img
                    className="size-full"
                    src={renderBase64AsSrc(
                      user.profileImageId.image,
                      user.profileImageId.imageType,
                    )}
                    alt="User's profile"
                  />
                </CardHeader>
                <CardContent className="my-auto flex min-h-12 w-full items-center py-0 font-bold">
                  <p>
                    {user.firstName} {user.lastName}
                  </p>
                </CardContent>
                <CardFooter className=" flex grow flex-col gap-2 px-3 py-0 ">
                  <Button
                    type="button"
                    onClick={() =>
                      addFriend(user._id, {
                        requestSender: userData?._id || "",
                      })
                    }
                    className="my-auto w-full font-bold"
                  >
                    Add friend
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
}
