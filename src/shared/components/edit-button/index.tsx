import { Button, ButtonProps } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import React from "react";

export const EditButton = (props: ButtonProps) => {
  return (
    <Button leftIcon={<IconEdit />} color="blue" variant="light" {...props}>
      {props.children}
    </Button>
  );
};
