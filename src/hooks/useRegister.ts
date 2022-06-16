import { useMutation } from "react-query";
import { registers } from "utils/auth";
import { AuthError } from "types/type";
import { IUserInfo } from "types/type";

export default function useRegister() {
  const mutation = useMutation((params: IUserInfo) => registers(params), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
