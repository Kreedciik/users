import { FC } from "react";
import { MantineProvider } from "@mantine/core";

const withMantine = (Component: FC) => () =>
  (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component />
    </MantineProvider>
  );

export default withMantine;
