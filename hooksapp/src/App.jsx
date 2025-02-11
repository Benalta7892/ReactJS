import { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import { UserContext, ColorContext } from "./components/MyContexts";

class App extends Component {
  state = {
    user: {
      name: "Lisa",
      age: 8,
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={"red"}>
          <Profile />
        </ColorContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
