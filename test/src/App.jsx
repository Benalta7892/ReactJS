import React, { Component } from "react";
import "./App.css";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />

        <div className="row">
          <Vegeta render={(saiyan) => saiyan && "Vegeta"} />
          <Goku name="Goku" />
        </div>
      </div>
    );
  }
}

export default App;
