import { useSearchUser } from "@/features/users-list/api/requests";
import { SearchInput } from "@/shared/components";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export const SearchUser = () => {
  const dispatch = useDispatch();
  const term = useSelector<{ term: string }>((state) => state.term) as string;
  useSearchUser();
  return (
    <div>
      <SearchInput
        defaultValue={term}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "SEARCH_USER", payload: { term: e.target.value } })
        }
        placeholder="Search"
      />
    </div>
  );
};
