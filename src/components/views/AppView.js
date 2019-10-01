import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

export const AppView = ({ children }) => {
  return (
    <MainContainer>
      <ScrollView>
        <Container>
          <TestText>LUL</TestText>
        </Container>
      </ScrollView>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  background-color: greenyellow;
  height: 500px;
`;

const Container = styled.View``;
const TestText = styled.Text``;
