import React from "react";
import styled from "styled-components";

export const DaysViewNav = props => {
  const { date, prevDayIndex, nextDayIndex, setCurrentDayIndexFn } = props;
  return (
    <Container>
      <Button
        onPress={() => {
          if (prevDayIndex !== -1) setCurrentDayIndexFn(prevDayIndex);
        }}>
        <Text>{"<<<"}</Text>
      </Button>
      <Text>{date}</Text>
      <Button
        onPress={() => {
          if (nextDayIndex !== -1) setCurrentDayIndexFn(nextDayIndex);
        }}>
        <Text>{">>>"}</Text>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
`;
const Button = styled.TouchableOpacity`
  padding: 10px 30px;
  background-color: white;
  border-radius: 10px;
`;

const Text = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;
