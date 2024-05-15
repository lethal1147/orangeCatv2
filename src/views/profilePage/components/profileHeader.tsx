import { useState } from "react";
import { Send, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { renderBase64AsSrc, withAsync } from "@/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ACCEPT_ONLY_FILES } from "@/constants/input";
import { createAlertError } from "@/lib";
import { updateCoverImage } from "@/api";
import useProfileStore from "@/stores/profileStore";
import { useApi } from "@/hooks";
import { apiStatus } from "@/constants";
import { Loader } from "@/components";
import { useAuthStore } from "@/stores";

type ProfileHeaderPropsType = {
  mode: string;
};

export default function ProfileHeader({ mode }: ProfileHeaderPropsType) {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const { profileData, setProfileData } = useProfileStore();
  const { updateUserData } = useAuthStore();
  const { setStatus, isPending } = useApi();
  const isSelf = mode === "self";

  const onChangeCoverImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file && profileData?._id) {
      setCoverImage(URL.createObjectURL(file));
      try {
        setStatus(apiStatus.pending);
        const formData = new FormData();
        formData.append("coverImage", file);
        const {
          response: { user },
          error,
        } = await withAsync(() => updateCoverImage(profileData?._id, formData));
        if (error) throw new Error(error);
        setProfileData(user);
        updateUserData(user._id);
        setStatus(apiStatus.success);
      } catch (err) {
        createAlertError(err as Error, "Failed to update cover image");
        setStatus(apiStatus.error);
      }
    }
  };

  return (
    <div className="relative h-[340px] w-full">
      {isPending && <Loader />}
      <Avatar className="absolute left-10 top-[175px] z-20 size-40 border-4 border-white">
        <AvatarImage
          src={renderBase64AsSrc(
            profileData?.profileImageId.image || "",
            profileData?.profileImageId.imageType || "",
          )}
        />
        <AvatarFallback>{profileData?.firstName[0]}</AvatarFallback>
      </Avatar>
      <div className="group/item absolute top-0 h-[200px] w-full overflow-hidden transition-all">
        <img
          className="w-full"
          src={
            coverImage ||
            renderBase64AsSrc(
              profileData?.profileStyleId.coverImageId.image || "",
              profileData?.profileStyleId.coverImageId.imageType || "",
            )
          }
          alt="user's cover"
        />
        <Label
          htmlFor="file"
          className="group/item invisible absolute bottom-4 right-4 z-30 cursor-pointer rounded-md bg-white px-5 py-3 text-gray-text transition-all hover:bg-gray-stroke group-hover/item:visible"
        >
          Update cover image
        </Label>
        <Input
          onChange={(e) => onChangeCoverImage(e)}
          id="file"
          className="hidden"
          type="file"
          accept={ACCEPT_ONLY_FILES}
        />
      </div>
      <div className="absolute bottom-5 left-[220px] flex text-gray-text">
        <div className=" flex w-full flex-col">
          <h1 className="pb-2 text-3xl font-bold">
            {profileData?.firstName} {profileData?.lastName}
          </h1>
          <h3>Friends</h3>
          <ul className="relative flex">
            <li>
              <Avatar className="-mr-2.5 overflow-hidden border-4 border-white">
                <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </Avatar>
            </li>
            <li>
              <Avatar className="-mr-2.5 overflow-hidden border-4 border-white">
                <AvatarImage src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </Avatar>
            </li>
            <li>
              <Avatar className="-mr-2.5 overflow-hidden border-4 border-white">
                <AvatarImage src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </Avatar>
            </li>
            <li>
              <Avatar className="-mr-2.5 overflow-hidden border-4 border-white">
                <AvatarImage src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </Avatar>
            </li>
          </ul>
        </div>
        {!isSelf && (
          <div className="ml-5 flex gap-3 self-end">
            <Button
              variant="outline"
              className=" gap-2 border-gray-text font-bold text-gray-text"
            >
              <UserPlus />
              Add friend
            </Button>
            <Button
              variant="outline"
              className=" gap-2 border-gray-text font-bold text-gray-text"
            >
              <Send />
              Message
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
