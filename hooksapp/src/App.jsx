import { Component } from "react";
import "./App.css";
import Count from "./components/Count";

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Count />
      </div>
    );
  }
}

export default App;
