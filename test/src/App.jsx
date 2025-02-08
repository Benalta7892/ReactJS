import React, { Component } from "react";
import "./App.css";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";
import Frieza from "./components/Frieza";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Cliquez sur les gentils</h1>
        <hr />

        <div className="row">
          <ErrorBoundary name="Toto">
            <Vegeta />
            <Goku />
            <Frieza />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
