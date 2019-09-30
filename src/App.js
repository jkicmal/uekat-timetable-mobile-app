import React from "react";
import { View } from "react-native";
// import styled from "styled-components";

import { Header, Nav } from "./components";

class App extends React.Component {
  state = {
    navElements: [
      { label: "Days", icon: "#" },
      { label: "Calendar", icon: "#" },
      { label: "Refresh", icon: "#" },
      { label: "About", icon: "#" },
    ],
    currentNavElement: {},
  };

  render() {
    const { navElements, currentNavElement } = this.state;
    return (
      <View>
        {/* Header */}
        <Header title={currentNavElement.label} />

        {/* Main View */}
        <View currentNavLabel={currentNavElement.label} />

        {/* Navigation */}
        <Nav navElements={navElements} currentNavElement={currentNavElement} />
      </View>
    );
  }
}

export default App;
