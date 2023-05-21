import { IUser } from "@/features/users-list/model/user.types";
import * as actionTypes from "./action.types";

export const getUsers = (users: IUser[]) => {
  const action = {
    type: actionTypes.GET_USERS,
    users,
  };
};
export const getUser = (user: IUser) => {
  const action = {
    type: actionTypes.GET_CURRENT_USER,
    user,
  };
};
export const deleteUser = (id: number) => {
  const action = {
    type: actionTypes.DELETE_USER,
    id,
  };
};
