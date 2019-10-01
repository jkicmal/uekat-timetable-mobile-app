import React from "react";

import styled from "styled-components";

export const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.View`
  background-color: blueviolet;
  padding: 5px;
  justify-content: center;
  align-items: center;
  flex: 0 0 50px;
`;

const Title = styled.Text`
  font-family: System;
  font-size: 20px;
  font-weight: 700;
`;
