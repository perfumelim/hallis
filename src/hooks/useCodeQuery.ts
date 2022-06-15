import { useQuery } from "react-query";
import axios from "axios";

export default function useCodeQuery() {
  const { data, isLoading, isError, error } = useQuery("codedata", () =>
    axios.get("http://localhost:4000/code").then((res) => res.data)
  );

  return {
    isLoading,
    isError,
    error,
    codedata: data,
  };
}
