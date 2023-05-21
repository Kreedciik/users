import { Button, ButtonProps } from "@mantine/core";
import { IconXboxX } from "@tabler/icons-react";

export const CancelButton = (props: ButtonProps) => {
  return (
    <Button leftIcon={<IconXboxX />} color="blue" variant="light" {...props}>
      {props.children}
    </Button>
  );
};
