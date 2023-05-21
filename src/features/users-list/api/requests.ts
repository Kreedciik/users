import { useQuery } from "react-query";
import { getUsers, searchUser } from ".";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "@/shared/hooks";

export const useUsersList = () => {
  const dispatch = useDispatch();
  const term = useSelector<{ term: string }>((state) => state.term) as string;
  const { isLoading, isError } = useQuery(["users", !!!term], getUsers, {
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess: (data) => {
      dispatch({ type: "GET_USERS", payload: { users: data.users } });
    },
  });

  return {
    isLoading,
    isError,
  };
};

export const useSearchUser = () => {
  const dispatch = useDispatch();
  const term = useSelector<{ term: string }>((state) => state.term) as string;
  const search = useDebounce(term, 1000);

  const { isLoading, isError } = useQuery(
    ["search", search, !!!search ? "users" : ""],
    () => searchUser(search),
    {
      refetchOnWindowFocus: false,
      retry: 1,
      enabled: !!search,
      onSuccess: (data) => {
        dispatch({ type: "GET_USERS", payload: { users: data.users } });
      },
    }
  );

  return {
    isLoading,
    isError,
  };
};
