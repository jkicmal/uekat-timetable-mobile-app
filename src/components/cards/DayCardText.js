import React from "react";
import styled from "styled-components";

export const DayCardText = ({ text }) => {
  return <CardContentText>{text}</CardContentText>;
};

const CardContentText = styled.Text`
  font-weight: 700;
  font-size: 17px;
`;
