import React from "react";
import styled from "styled-components";

export class Nav extends React.Component {
  render() {
    const { navElements, changeViewFn } = this.props;
    return (
      <Container>
        {renderButtonsFromNavElements(navElements, changeViewFn)}
      </Container>
    );
  }
}

const renderButtonsFromNavElements = (navElements, changeViewFn) => {
  return navElements.map(navElement => renderButton(navElement, changeViewFn));
};

const renderButton = (navElement, changeViewFn) => {
  return (
    <Button onPress={() => changeViewFn(navElement)}>
      <Label>{navElement.label}</Label>
    </Button>
  );
};

const Container = styled.View`
  flex: 0 0 50px;
  background-color: palegoldenrod;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-weight: 700;
  font-size: 17px;
`;
