import "./App.css";
import { Component } from "react";
import LifeCycle from "./LifeCycle";

class App extends Component {
  state = {
    display: true,
  };

  effacerOuAfficher = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    const showComponent = this.state.display ? <LifeCycle name="Toto 2" /> : <div></div>;

    return (
      <div className="App">
        {showComponent}

        <button onClick={this.effacerOuAfficher}>Cliquez ici</button>
      </div>
    );
  }
}

export default App;
