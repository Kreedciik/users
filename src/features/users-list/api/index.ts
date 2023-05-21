import apiReq from "@/shared/api/interceptor";
import { apiKeys } from "@/shared/constants";
import {
  CreateUser,
  IUser,
  UpdateUser,
  UsersResponse,
} from "../model/user.types";

export const getUsers = async () => {
  const response = await apiReq.get<UsersResponse>(apiKeys.getUsers);
  return response.data;
};
export const getUser = async (id: number) => {
  const response = await apiReq.get<IUser>(apiKeys.getUser + id);
  return response.data;
};
export const searchUser = async (term: string) => {
  const response = await apiReq.get<UsersResponse>(apiKeys.searchUser, {
    params: { q: term },
  });
  return response.data;
};
export const saveUser = async (user: CreateUser) => {
  const response = await apiReq.post(apiKeys.saveUser, user);
  return response.data;
};
export const updateUser = async (userData: UpdateUser) => {
  const response = await apiReq.put(
    apiKeys.updateUser + `/${userData.id}`,
    userData
  );
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await apiReq.delete(apiKeys.deleteUser + id);
  return response.data;
};
