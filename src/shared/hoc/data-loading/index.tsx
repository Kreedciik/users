import React, { ReactElement } from "react";
import { Loader } from "@mantine/core";
import s from "./index.module.scss";
interface IDataLoading<T> {
  data: T[];
  isLoading: boolean;
  isError: boolean;
  children: ReactElement;
}
export const DataLoading = <T,>({
  data,
  isError,
  isLoading,
  children,
}: IDataLoading<T>) => {
  if (isLoading) {
    return (
      <div className={s.loadingContainer}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div className={s.loadingContainer}>Error</div>;
  }

  if (!data.length) {
    return <div className={s.loadingContainer}>Data is empty!</div>;
  }

  return children;
};
