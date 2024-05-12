import { useState } from "react";
import { apiStatus } from "@/constants";
import { ApiStatusType } from "@/types";

export default function useApi(starterStatus: ApiStatusType = apiStatus.idle) {
  const [status, setStatus] = useState<ApiStatusType>(starterStatus);
  const isPending = status === apiStatus.pending;
  const isError = status === apiStatus.error;
  const isSuccess = status === apiStatus.success;
  const isIdle = status === apiStatus.idle;

  return {
    status,
    setStatus,
    isPending,
    isError,
    isSuccess,
    isIdle,
  };
}
