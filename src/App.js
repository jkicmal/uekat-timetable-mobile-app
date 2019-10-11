import React from "react";
import styled from "styled-components";

import { Header, Nav } from "./components";
import { AppContentRenderer } from "./components/AppContentRenderer";

class App extends React.Component {
  state = {
    navElements: [
      { label: "Days", icon: "#" },
      { label: "Calendar", icon: "#" },
      { label: "About", icon: "#" },
    ],
    currentNavElement: { label: "Days", icon: "#" },
  };

  componentDidMount() {
    const { navElements } = this.state;
    this.setState({ currentNavElement: navElements[0] });
  }

  changeView(navElement) {
    this.setState({ currentNavElement: navElement });
  }

  render() {
    const { navElements, currentNavElement } = this.state;
    return (
      <Container>
        {/* Header */}
        <Header title={currentNavElement.label} />

        {/* Main View */}
        {/*  currentNavLabel={currentNavElement.label} */}
        <AppContentRenderer currentNavElement={this.state.currentNavElement} />

        {/* Navigation */}
        <Nav
          navElements={navElements}
          changeViewFn={this.changeView.bind(this)}
        />
      </Container>
    );
  }
}

export default App;

const Container = styled.View`
  height: 100%;
`;
