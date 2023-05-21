import { Component, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
const withRouter = (component: ReactNode) => () =>
  (
    //  @ts-ignore
    <BrowserRouter>{component()}</BrowserRouter>
  );
export default withRouter;
