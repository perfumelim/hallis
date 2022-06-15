import { useMutation } from "react-query";
import { registers } from "utils/auth";
import { AuthError } from "types/type";

export default function useRegister() {
  const mutation = useMutation(registers, {
    onSuccess: (data) => {
      console.log(data);
      /* TODO: 구현 예정 */
    },
    onError: (error: AuthError) => {
      console.log(error);
      /* TODO: 구현 예정 */
    },
  });
  return mutation;
}
