import { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";

class App extends Component {
  state = {
    titre: "Mon catalogue Voitures",
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
      </div>
    );
  }
}

export default App;
