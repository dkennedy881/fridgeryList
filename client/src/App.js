import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//components
import NavBar from "./components/Nav/NavBar";
import FridgeModContainer from "./components/FridgeMods/FridgeModContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      userObj:{
        name:"DeMarcus Kennedy"
      }
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar isLoggedIn={this.state.isLoggedIn} userObj={this.state.userObj} ></NavBar>
        <FridgeModContainer></FridgeModContainer>
      </div>
    );
  }
}

export default App;
