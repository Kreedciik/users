import { queryClient } from "@/shared/constants";
import { FC } from "react";
import { QueryClientProvider } from "react-query";
const withReactquery = (Component: FC) => () =>
  (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );

export default withReactquery;
