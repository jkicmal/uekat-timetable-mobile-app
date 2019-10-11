import React from "react";
import styled from "styled-components";
import { DaysView } from "./views/DaysView";

export const AppContentRenderer = props => {
  const { currentNavElement } = props;
  return <MainContainer>{renderView(currentNavElement)}</MainContainer>;
};

const renderView = currentNavElement => {
  switch (currentNavElement.label) {
    case "Calendar":
      return <EmptyView />;
    case "About":
      return <EmptyView />;
    default:
      return <DaysView />;
  }
};

const MainContainer = styled.View`
  flex: 1;
`;

const EmptyView = styled.View``;
