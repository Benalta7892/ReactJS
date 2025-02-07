import React, { Component } from "react";
import "./App.css";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";
import Frieza from "./components/Frieza";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Cliquez sur les gentils</h1>
        <hr />

        <div className="row">
          <Vegeta />
          <Goku />
          <Frieza />
        </div>
      </div>
    );
  }
}

export default App;
