import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Route exact path="/" component={Docs} />
      <Route path="/tutorial" component={Tutorials} />
      <Route path="/community" component={Community} />
    </BrowserRouter>
  );
}

export default App;
