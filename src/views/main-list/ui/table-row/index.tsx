import { IUser } from "@/features/users-list/model/user.types";
import { ActionIcon, Anchor, Avatar, Group, Text } from "@mantine/core";
import React, { FC } from "react";
import s from "./index.module.scss";
import { IconPencil, IconTrash, IconEyeFilled } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
interface IUserTableRow {
  data: IUser[];
}
export const TableRow: FC<IUserTableRow> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelect = (user: IUser) => {
    dispatch({
      type: "SELECTED_USER",
      payload: { selected: user },
    });
  };

  const handleView = (user: IUser) => {
    navigate(`view/${user.id}`, { state: { user } });
  };
  const handleEdit = (user: IUser) => {
    navigate(`edit/${user.id}`, { state: { user } });
  };
  return (
    <tbody className={s.TBody}>
      {data.map((user) => (
        <tr key={user.id}>
          <td>
            <Group
              align="center"
              style={{ justifyContent: "center" }}
              spacing="sm"
            >
              <Avatar size={30} src={user.image} radius={30} />
              <Text fz="sm" fw={500}>
                {user.firstName}
              </Text>
            </Group>
          </td>
          <td>
            <Anchor component="button" size="sm">
              {user.email}
            </Anchor>
          </td>
          <td>
            <Text fz="sm" c="dimmed">
              {user.phone}
            </Text>
          </td>
          <td>
            <Group spacing={0} position="right">
              <ActionIcon onClick={() => handleEdit(user)}>
                <IconPencil size="1rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon onClick={() => handleSelect(user)} color="red">
                <IconTrash size="1rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon color="gray" onClick={() => handleView(user)}>
                <IconEyeFilled size="1rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
