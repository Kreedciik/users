import { IUser } from "@/features/users-list/model/user.types";
import { BackButton } from "@/shared/components";
import { Avatar, Group, Paper, Text } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";
import s from "./index.module.scss";

const ViewCard = () => {
  const { image, phone, email, firstName, username }: IUser =
    useLocation().state?.user;

  return (
    <div className={s.userViewContainer}>
      <Paper className="" radius="md" withBorder p="lg">
        <Group noWrap>
          <Avatar src={image} size={94} radius="md" />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {username}
            </Text>

            <Text fz="lg" fw={500}>
              {firstName}
            </Text>

            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" />
              <Text fz="xs" c="dimmed">
                {email}
              </Text>
            </Group>

            <Group noWrap spacing={10} mt={5}>
              <IconPhoneCall stroke={1.5} size="1rem" />
              <Text fz="xs" c="dimmed">
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
      </Paper>
      <BackButton />
    </div>
  );
};

export default ViewCard;
