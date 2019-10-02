import React from "react";
import styled from "styled-components";

export const DayCardContent = ({ children }) => {
  return <CardContent>{children}</CardContent>;
};

const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
