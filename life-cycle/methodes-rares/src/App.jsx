import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import ParentComponent from "./ParentComponent";

class App extends Component {
  // state = {
  //   age: 27,
  // };

  // addOneYear = () => {
  //   this.setState((prevState) => ({
  //     age: prevState.age + 1,
  //   }));
  // };

  render() {
    return (
      <div className="App">
        {/* <MyComponent age={this.state.age} />

        <button onClick={this.addOneYear}>Changer le props</button> */}

        <ParentComponent />
      </div>
    );
  }
}

export default App;
