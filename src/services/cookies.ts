import Cookies, { CookieSetOptions } from "universal-cookie";

export const createNewCookies = () => new Cookies();
export const setCookies =
  (cookies: Cookies) =>
    (name: string, item: unknown, options: CookieSetOptions = {}) =>
      cookies.set(name, item, options);

export const getCookies = (cookies: Cookies, name: string) => cookies.get(name);
