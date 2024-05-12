import { ApiError } from "@/types";

export default function handleError(err: ApiError) {
  if (err?.response?.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    localStorage.removeItem("activeUser");
  }
  throw err;
}
