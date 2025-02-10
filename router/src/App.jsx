import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      underConst: {
        Docs: false,
        Tutorials: true,
        Community: false,
      },
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />

        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutorial" component={Tutorials} />
          <Route strict path="/community" component={Community} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
