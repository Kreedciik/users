import React from "react";
import s from "./index.module.scss";
export const TableHead = ({ header }: { header: string[] }) => {
  return (
    <thead className={s.tableHead}>
      {header.map((head, index) => (
        <th key={index}>{head}</th>
      ))}
    </thead>
  );
};
