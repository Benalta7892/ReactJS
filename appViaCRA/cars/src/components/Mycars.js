import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  };

  render() {
    const { title, color } = this.props;

    return (
      <div>
        {/* <h1>Catalogue de voitures</h1> */}
        <h1 style={{ color: color }}>{title}</h1>

        <Car color="red">{this.state.cars[0]}</Car>
        <Car>{this.state.cars[1]}</Car>
        <Car color="green">{this.state.cars[2]}</Car>
      </div>
    );
  }
}

export default Mycars;
