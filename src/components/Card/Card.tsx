import React from "react";
import { SCard } from "./Card.styled";

interface Props {
  name: string;
  url: string;
  id: string;
}

export const Card: React.FC<Props> = ({ name }) => {
  return <SCard>{name}</SCard>;
};
