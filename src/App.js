import React, { Component } from "react";

// import css from "./App.css";

import Toolbar from "./Components/Toolbar";

import Logo from "./Components/Logo";
import MenuDataProvider from "./Components/DataProvider";
import MenuDisplay from "./Components/DataDisplay";

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Toolbar />
      </div>
    );
  }
}

export default App;
