import "./App.css";
import { Component } from "react";
import Profile from "./components/Profile";
import { MyContext } from "./components/MyContext";

class App extends Component {
  state = {
    user: {
      name: "Lisa",
      age: 28,
    },
  };

  render() {
    return <Profile info={this.state.user} />;
  }
}

export default App;
