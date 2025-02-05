import React, { Component } from "react";
import "./App.css";
import MyRef from "./MyRef";

class App extends Component {
  constructor(props) {
    super(props);

    this.refComp = React.createRef();
  }

  handleClick = () => {
    this.refComp.current.focus();
  };

  render() {
    console.log(this.refComp);

    return (
      <div className="App">
        <MyRef name="Toto" ref={this.refComp} />
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default App;
