import "./App.css";
import { Component } from "react";
import LifeCycle from "./LifeCycle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifeCycle name="Toto 2" />
      </div>
    );
  }
}

export default App;
