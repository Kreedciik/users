import { IUser } from "@/features/users-list/model/user.types";

export type UsersState = {
  users: IUser[];
  term: string;
  selected: IUser | null;
};

export type UsersType =
  | "GET_USERS"
  | "DELETE_USER"
  | "UPDATE_USER"
  | "SEARCH_USER"
  | "SELECTED_USER";

export type UsersAction = {
  type: UsersType;
  payload: IUser;
};

export type DispatchType = (args: UsersAction) => UsersAction;
