import { Input, InputProps } from "@mantine/core";
import { FC } from "react";
import { Control, Controller, FieldError } from "react-hook-form";

interface IInputController {
  name: string;
  control: Control;
  error: FieldError | undefined;
  placeholder?: string;
  type?: "text" | "number";
}
export const InputController: FC<IInputController> = ({
  control,
  error,
  name,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...field} {...props} />}
    />
  );
};
