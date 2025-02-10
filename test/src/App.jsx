import React, { Component } from "react";
import "./App.css";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";
import AddHits from "./addHits";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />

        <div className="row">
          <AddHits render={(hits, addOne, name) => <Vegeta hits={hits} addOne={addOne} name="Vegeta" />} />
          <AddHits render={(hits, addOne, name) => <Goku hits={hits} addOne={addOne} name="Goku" />} />
        </div>
      </div>
    );
  }
}

export default App;
