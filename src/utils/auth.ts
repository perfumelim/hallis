import client from "./client";
import { AuthResult, IUserInfo } from "types/type";

export async function registers(params: IUserInfo) {
  const response = await client.post<AuthResult>("/auth", params);
  return response.data;
}
