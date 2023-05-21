import { IUser } from "@/features/users-list/model/user.types";
import { DeleteButton, DeleteModal } from "@/shared/components";
import { Button } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import s from "./index.module.scss";
import { IconTrash } from "@tabler/icons-react";
import { useUserMutationD } from "@/features/users-list/api/mutations";
export const DeleteUserModal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: "SELECTED_USER", payload: { selected: null } });
  };
  const deleteUser = useUserMutationD(() => {
    handleClose();
  });
  const selected = useSelector<{ selected: IUser }>(
    (state) => state.selected
  ) as IUser;
  return (
    <DeleteModal
      opened={!!selected?.id}
      close={handleClose}
      title="Delete user"
    >
      <div className={s.deleteBtnContainer}>
        <Button
          variant="light"
          onClick={() => deleteUser.mutate(selected.id as number)}
          color="red"
          loading={deleteUser.isLoading}
          leftIcon={<IconTrash size="1rem" stroke={1.5} />}
        >
          Delete
        </Button>
        <Button>Cancel</Button>
      </div>
    </DeleteModal>
  );
};
