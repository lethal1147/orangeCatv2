import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginSchemaType, createAlert, decodeToken } from "@/lib";
import { withAsync } from "@/utils";
import { getOneUserById, login, logout } from "@/api";
import { createNewCookies, setCookies } from "@/services";
import { UserDataTypePopulate } from "@/types";

interface AuthStore {
  isLoggedIn: boolean;
  userData: UserDataTypePopulate | null;
  loginHandler: (payload: LoginSchemaType) => Promise<void>;
  logoutHandler: () => void;
  updateUserData: (userId: string) => Promise<void>;
}
const cookies = createNewCookies();

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      userData: null,
      loginHandler: async (payload: LoginSchemaType) => {
        const { response, error } = await withAsync(() => login(payload));
        if (error) throw new Error(error);
        const { accessToken, refreshToken } = response;
        const saveCookies = setCookies(cookies);
        const expiration = new Date();
        const EXPIRE_HOURS = 12 * 60 * 60 * 1000;
        expiration.setTime(expiration.getTime() + EXPIRE_HOURS);
        saveCookies("accessToken", accessToken, {
          path: "/",
          httpOnly: true,
          expires: expiration,
          secure: true,
        });
        localStorage.setItem("refreshToken", refreshToken);
        await createAlert({
          icon: "success",
          title: response.message,
          timer: 3000,
        });
        const decodedToken = decodeToken(accessToken);
        const {
          response: { user },
        } = await withAsync(() => getOneUserById(decodedToken.userId));
        set({ isLoggedIn: true, userData: user });
      },
      logoutHandler: async () => {
        await logout();
        localStorage.removeItem("refreshToken");
        set({ isLoggedIn: false });
      },
      updateUserData: async (userId: string) => {
        const {
          response: { user },
        } = await withAsync(() => getOneUserById(userId));
        set({ userData: user });
      },
    }),
    {
      name: "authen",
    },
  ),
);

export default useAuthStore;
