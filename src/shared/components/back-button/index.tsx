import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>Back</Button>;
};
