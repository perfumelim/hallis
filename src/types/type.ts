import { AxiosError } from "axios";

export interface IUserInfo {
  twitterUsername: string;
  vipCode: string;
}

export interface User {
  id: number;
  username: string;
  confirmed: boolean;
}

export interface AuthResult {
  jwt: string;
  user: User;
}

export type AuthErrorData = {
  messages: {
    id: string;
    message: string;
  }[];
}[];

export type AuthError = AxiosError<{
  statusCode: number;
  error: string;
  message: AuthErrorData;
  data: AuthErrorData;
}>;
