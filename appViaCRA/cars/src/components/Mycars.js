import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  render() {
    console.log(this);

    return (
      <div>
        {/* <h1>Catalogue de voitures</h1> */}
        <h1>{this.props.title}</h1>

        <Car color="red">Ford</Car>
        <Car>Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
