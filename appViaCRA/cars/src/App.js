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

  changeViaParam = (titre) => {
    this.setState({
      titre: titre,
    });
  };

  changeViaBind = (param) => {
    this.setState({
      titre: param,
    });
  };

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={() => this.changeViaParam("Titre via un parametre")}>Changer le nom via parametre</button>
        <button onClick={this.changeViaBind.bind(this, "Titre via Bind")}>Via un Bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre} />
      </div>
    );
  }
}

export default App;
