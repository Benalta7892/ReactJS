import { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Count from "./components/Count1";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Count />
        <Count />

        <Button>Count 1</Button>
        <Button>Count 1</Button>
      </div>
    );
  }
}

export default App;
