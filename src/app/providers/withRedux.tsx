import { store } from "@/shared/constants";
import { FC } from "react";
import { Provider } from "react-redux";

const withRedux = (Component: FC) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );

export default withRedux;
