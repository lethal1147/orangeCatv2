export type ApiStatusType = "IDLE" | "PENDING" | "ERROR" | "SUCCESS";

export type ApiStatusObjectType = {
  idle: "IDLE";
  pending: "PENDING";
  error: "ERROR";
  success: "SUCCESS";
};

export interface ApiError extends Error {
  response?: {
    data?: {
      message?: string;
    };
    status?: number | string;
  };
}
