import React, { Component } from "react";
import styled from "styled-components";

export class DayCard extends Component {
  render() {
    const { backgroundColor, children } = this.props;
    return (
      <CardContainer style={{ elevation: 5 }} backgroundColor={backgroundColor}>
        {children}
      </CardContainer>
    );
  }
}

const CardContainer = styled.View`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px black;
`;
