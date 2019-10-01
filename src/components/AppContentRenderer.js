import React from "react";
import styled from "styled-components";
import { DaysView } from "./views";

export const AppContentRenderer = props => {
  const { currentNavElement } = props;
  return <MainContainer>{renderView(currentNavElement)}</MainContainer>;
};

const renderView = currentNavElement => {
  switch (currentNavElement.label) {
    case "Calendar":
      return <DaysView />;
    case "Refresh":
      return <DaysView />;
    case "About":
      return <DaysView />;
    default:
      return <DaysView />;
  }
};

const MainContainer = styled.View`
  flex: 1;
`;
