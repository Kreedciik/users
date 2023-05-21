import { SearchUser } from "@/features/users";
import { useUsersList } from "@/features/users-list";
import s from "./index.module.scss";
import { Button, ScrollArea, Table } from "@mantine/core";
import { TableHead } from "./ui/table-head";
import { TableRow } from "./ui/table-row";
import { useSelector } from "react-redux";
import { IUser } from "@/features/users-list/model/user.types";
import { DataLoading } from "@/shared/hoc";
import { DeleteUserModal } from "@/features/users/delete-user";
import { useNavigate } from "react-router-dom";

const MainList = () => {
  const { isLoading, isError } = useUsersList();
  const users = useSelector<{ users: IUser[] }>(
    (state) => state.users
  ) as IUser[];
  const navigate = useNavigate();
  return (
    <div className={s.mainList}>
      <div className={s.listContainer}>
        <SearchUser />

        <DataLoading data={users} isError={isError} isLoading={isLoading}>
          <>
            <ScrollArea h={300}>
              <Table
                className={s.userTable}
                sx={{ minWidth: 800 }}
                verticalSpacing="sm"
              >
                <TableHead header={["User", "Email", "Phone", ""]} />
                <TableRow data={users} />
              </Table>
            </ScrollArea>
            <DeleteUserModal />
          </>
        </DataLoading>
        <Button onClick={() => navigate("add")} color="green" variant="filled">
          Add user
        </Button>
      </div>
    </div>
  );
};

export default MainList;
