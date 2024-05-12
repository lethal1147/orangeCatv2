import { ApiStatusObjectType } from "@/types";

export const devUrl = {
  v1: "http://localhost:8000/api/v1",
};

export const apiStatus: ApiStatusObjectType = {
  idle: "IDLE",
  pending: "PENDING",
  error: "ERROR",
  success: "SUCCESS",
};

export const endpoints = {
  user: "user",
};
