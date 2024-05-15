import { create } from "zustand";
import { UserDataTypePopulate } from "@/types";

interface ProfileStoreType {
  profileData: UserDataTypePopulate | null;
  setProfileData: (profile: UserDataTypePopulate) => void;
}

const useProfileStore = create<ProfileStoreType>((set) => ({
  profileData: null,
  setProfileData: (profile: UserDataTypePopulate) =>
    set(() => ({ profileData: profile })),
}));

export default useProfileStore;
