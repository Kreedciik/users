import { Modal } from "@mantine/core";
import React, { FC, ReactElement } from "react";

interface IDeleteModal {
  opened: boolean;
  title: string;
  close: () => void;
  children: ReactElement;
}
export const DeleteModal: FC<IDeleteModal> = ({
  title,
  opened,
  close,
  children,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      title={title}
      overlayProps={{
        opacity: 0.55,
        blur: 3,
      }}
    >
      {children}
    </Modal>
  );
};
