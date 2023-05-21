import { Input, InputBaseProps, InputProps } from "@mantine/core";
import { InputPlaceholderProps } from "@mantine/core/lib/Input/InputPlaceholder/InputPlaceholder";
import { IconSearch } from "@tabler/icons-react";
import { ComponentProps, FC } from "react";

export const SearchInput = (props: InputProps | InputPlaceholderProps) => {
  return (
    <div>
      <Input {...props} icon={<IconSearch size="1rem" />} />
    </div>
  );
};
