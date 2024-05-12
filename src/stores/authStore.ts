import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginSchemaType, createAlert } from "@/lib";
import { withAsync } from "@/utils";
import { login } from "@/api";
import { createNewCookies, getCookies, setCookies } from "@/services";

interface AuthStore {
  isLoggedIn: boolean;
  loginHandler: (payload: LoginSchemaType) => Promise<void>;
  logoutHandler: () => void;
}
const cookies = createNewCookies();

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
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

        set({ isLoggedIn: false });
      },
      logoutHandler: () => {
        const accessToken = getCookies(cookies, "accessToken");
        console.log(accessToken);
      },
    }),
    {
      name: "authen",
    },
  ),
);

export default useAuthStore;
