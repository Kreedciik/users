import { Button, ButtonProps } from "@mantine/core";
import React from "react";
import { IconTrash } from "@tabler/icons-react";

export const DeleteButton = (props: ButtonProps) => {
  return (
    <Button variant="light" color="red" leftIcon={<IconTrash />} {...props}>
      {props.children}
    </Button>
  );
};
