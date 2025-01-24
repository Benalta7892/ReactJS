import { Component } from "react";
// import Car from "./Cars";
import Wrapper from "./Wrapper";
import MyHeader from "./MyHeader";

const Car = ({ children, color }) => {
  let colorInfo = "";
  if (color) {
    colorInfo = color;
  } else {
    colorInfo = "Néant";
  }

  return (
    children && (
      <Wrapper>
        <p>Marque : {children}</p>
        <p>Couleur : {colorInfo}</p>
      </Wrapper>
    )
  );
};

export class Mycars extends Component {
  state = {
    cars: ["Ford", "Mercedes", "Peugeot"],
  };

  render() {
    const { title, color } = this.props;

    return (
      <div>
        {/* <h1>Catalogue de voitures</h1> */}
        <Wrapper>
          <MyHeader MyStyle={this.props.color}>{this.props.title}</MyHeader>
        </Wrapper>

        <Car color="red">{this.state.cars[0]}</Car>
        <Car>{this.state.cars[1]}</Car>
        <Car color="green">{this.state.cars[2]}</Car>

        <MyHeader MyStyle={this.props.color}>Bonjour</MyHeader>
      </div>
    );
  }
}

// export default Mycars;
