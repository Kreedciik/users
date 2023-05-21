import { Button, ButtonProps } from "@mantine/core";
import { IconPlaylistAdd } from "@tabler/icons-react";

export const AddButton = (props: ButtonProps) => {
  return (
    <Button
      leftIcon={<IconPlaylistAdd />}
      color="green"
      variant="light"
      {...props}
    >
      {props.children}
    </Button>
  );
};
