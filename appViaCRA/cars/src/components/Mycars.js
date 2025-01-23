import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        {/* <h1>Catalogue de voitures</h1> */}
        <h1>{title}</h1>

        <Car color="red">Ford</Car>
        <Car>Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
