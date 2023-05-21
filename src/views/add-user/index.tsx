import { useUserMutationCr } from "@/features/users-list/api/mutations";
import { UserForm } from "@/features/users/user-form";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const createUser = useUserMutationCr(() => {
    navigate(-1);
  });
  return (
    <div>
      <UserForm onHandleSave={createUser} />
    </div>
  );
};

export default AddUser;
