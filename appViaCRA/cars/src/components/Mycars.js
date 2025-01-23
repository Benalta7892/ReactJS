import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  render() {
    return (
      <div>
        <h1>Catalogue de voitures</h1>

        <Car color="red">Ford</Car>
        <Car color="black">Mercedes</Car>
        <Car color="green">Peugeot</Car>
      </div>
    );
  }
}

export default Mycars;
