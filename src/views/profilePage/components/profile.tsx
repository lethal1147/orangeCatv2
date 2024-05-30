import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserDataTypePopulate } from "@/types";
import { useAuthStore, useProfileStore } from "@/stores";
import ProfileHeader from "./profileHeader";

type ProfilePropsType = {
  user: UserDataTypePopulate;
};

export default function Profile({ user }: ProfilePropsType) {
  const { setProfileData } = useProfileStore();
  const { userData } = useAuthStore();
  const location = useLocation();
  const { mode } = location.state;

  useEffect(() => {
    if (user && mode !== "self") {
      setProfileData(user);
    } else if (userData && mode === "self") {
      setProfileData(userData);
    }
  }, [user]);

  return (
    <section className=" w-full">
      <ProfileHeader mode={mode} />
    </section>
  );
}
