import { CreateUser, IUser } from "@/features/users-list/model/user.types";
import { BackButton, InputController } from "@/shared/components";
import { Button } from "@mantine/core";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import s from "./index.module.scss";
import { useUserForm } from "./libs/useUserForm";
import { useMutationTemplate } from "@/shared/api/mutation.template";
import { UseMutationResult } from "react-query";
import { AxiosResponse } from "axios";
import { IResponseData } from "@/shared/models/axios.type";
interface IUserForm {
  data?: IUser;
  onHandleSave: UseMutationResult<
    AxiosResponse<IResponseData<any>, any>,
    unknown,
    Partial<Pick<IUser, "firstName" | "age" | "email" | "phone">>,
    unknown
  >;
}
export const UserForm = ({ data, onHandleSave }: IUserForm) => {
  console.log("Data");
  const isEdit = !!data?.id;
  const { control, errors, handleSubmit } = useUserForm(data);
  const onSubmit: SubmitHandler<CreateUser> = (data) => {
    console.log(data);
    onHandleSave.mutate(data);
  };
  return (
    <div className={s.formWrap}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formContainer}>
          <InputController
            control={control}
            name="firstName"
            placeholder="First name"
            error={errors?.firstName}
          />
          <InputController
            control={control}
            name="age"
            placeholder="Age"
            type="number"
            error={errors?.age}
          />
          <InputController
            control={control}
            name="phone"
            placeholder="Phone"
            error={errors?.phone}
          />
          <InputController
            control={control}
            name="email"
            placeholder="Email"
            error={errors?.email}
          />
          <div className={s.formBtns}>
            <Button loading={onHandleSave.isLoading} type="submit">
              {isEdit ? "Update" : "Create"}
            </Button>
            <BackButton />
          </div>
        </div>
      </form>
    </div>
  );
};
