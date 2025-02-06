import React, { Component } from "react";
import "./App.css";
import Vegeta from "./Vegeta";
import Goku from "./Goku";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />

        <div className="row">
          <Vegeta />
          <Goku />
        </div>
      </div>
    );
  }
}

export default App;
