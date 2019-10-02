import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

export const AppView = ({ children }) => {
  return (
    <MainContainer>
      <ScrollView>
        <Container>{children}</Container>
      </ScrollView>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  background-color: #eee;
`;

const Container = styled.View`
  padding: 10px;
  position: relative;
`;
