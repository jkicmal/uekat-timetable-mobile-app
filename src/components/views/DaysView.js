import React from "react";
import styled from "styled-components";
import { AppView } from "./AppView";

export class DaysView extends React.Component {
  // 0 - Render loader
  // 1 - Download Days with axios and load them to state
  // 2 - Calculate which index has current date
  // 3 - Set calculated day to currentDay
  // 4 - Write functions for previous and next button

  render() {
    return (
      <AppView>
        <TestText>LUL</TestText>
      </AppView>
    );
  }
}

const TestContainer = styled.View``;
const TestText = styled.Text``;
