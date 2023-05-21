import { CreateUser, IUser } from "@/features/users-list/model/user.types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const useUserForm = (data: IUser | undefined) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUser>();

  useEffect(() => {
    const keys = Object.keys(data || {}) as Array<keyof CreateUser>;
    if (keys.length && data) {
      keys.forEach((key) => {
        setValue(key, data[key]);
      });
    }
  }, [setValue, data]);

  return { control, errors, handleSubmit };
};
