import React, { Component } from "react";
import styled from "styled-components";

// TODO: How to use props in styled components
// TODO: Figure out colors!
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
  /* TODO: Read about box shadow */
  /* Remember to add elevation to main container */
  box-shadow: 0px 5px 5px black;
`;
