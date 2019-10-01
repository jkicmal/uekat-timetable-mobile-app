import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

export const AppView = ({ children }) => {
  return (
    <Container>
      <ScrollView>
        <TestText>{children}</TestText>
      </ScrollView>
    </Container>
  );
};

const TestText = styled.Text`
  font-size: 50px;
`;

const Container = styled.View`
  flex: 1;
  background-color: greenyellow;
`;
