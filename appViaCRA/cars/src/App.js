import { Component } from "react";
import "./App.css";
import Mycars from "./components/Mycars";

class App extends Component {
  state = {
    titre: "Mon catalogue Voitures",
  };

  changeTitle = (e) => {
    console.log(e.target);

    this.setState({
      titre: "Mon nouveau titre",
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
      </div>
    );
  }
}

export default App;
