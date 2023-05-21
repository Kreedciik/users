export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
  phone: number;
  username: string;
}

export type CreateUser = Partial<
  Pick<IUser, "firstName" | "age" | "email" | "phone">
>;
export type UpdateUser = Partial<IUser>;
export type UsersResponse = {
  users: IUser[];
  limit: number;
  skip: number;
  total: number;
};
