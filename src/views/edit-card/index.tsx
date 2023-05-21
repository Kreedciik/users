import { useUserMutationUp } from "@/features/users-list/api/mutations";
import { IUser } from "@/features/users-list/model/user.types";
import { UserForm } from "@/features/users/user-form";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditCard = () => {
  const user: IUser = useLocation().state?.user;
  const navigate = useNavigate();
  const updateUser = useUserMutationUp(() => {
    navigate(-1);
  });
  return (
    <div>
      <UserForm data={user} onHandleSave={updateUser} />
    </div>
  );
};

export default EditCard;
