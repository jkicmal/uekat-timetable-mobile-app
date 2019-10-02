import React from "react";
import styled from "styled-components";

export const DayCardHeader = ({ title }) => {
  return (
    <CardHeader>
      <CardHeaderText>{title}</CardHeaderText>
    </CardHeader>
  );
};

const CardHeader = styled.View`
  align-items: center;
  margin-bottom: 5px;
`;
const CardHeaderText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: System;
  font-weight: 700;
`;
