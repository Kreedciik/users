import { UsersAction, UsersState } from "./action.state.type";

const initialState: UsersState = {
  users: [],
  term: "",
  selected: null,
};

export const userReducer = (
  state: UsersState = initialState,
  action: UsersAction
) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, ...action.payload };
    case "SEARCH_USER":
      return { ...state, ...action.payload };
    case "SELECTED_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
