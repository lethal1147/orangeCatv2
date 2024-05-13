import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
  userId: string;
  exp: number;
  iat: number;
}

export const decodeToken = (token: string): JwtPayload =>
  jwtDecode<JwtPayload>(token);
