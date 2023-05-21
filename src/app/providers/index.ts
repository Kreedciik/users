import withMantine from "./withMantine";
import withReactquery from "./withReactQuery";
import withRedux from "./withRedux";
import withRouter from "./withRouter";
import compose from "compose-function";
export const withHocs = compose(
  withRouter,
  withReactquery,
  withRedux,
  withMantine
);
