import React, { ReactElement } from "react";
import s from "./index.module.scss";
export const Layout = ({ children }: { children: ReactElement }) => {
  return <div className={s.layout}>{children}</div>;
};
