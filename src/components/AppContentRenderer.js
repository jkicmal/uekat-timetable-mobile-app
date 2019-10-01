import React from "react";
import styled from "styled-components";

export const AppContentRenderer = ({ currentNavElement, children }) => {
  return (
    <MainContainer>{renderView(currentNavElement, children)}</MainContainer>
  );
};

const renderView = (currentNavElement, children) => {
  switch (currentNavElement.label) {
    case "Calendar":
      return <Container>{children}</Container>;
    case "Refresh":
      return <Container>{children}</Container>;
    case "About":
      return <Container>{children}</Container>;
    default:
      return <Container>{children}</Container>;
  }
};

const MainContainer = styled.View``;
const Container = styled.View``;
