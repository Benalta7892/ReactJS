import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", year: 2025, color: "Red" },
      { name: "Mercedes", year: 2024, color: "Black" },
      { name: "Peugeot", year: 2018, color: "Green" },
    ],
  };

  addTenYears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updatedState,
    });
  };

  getAge = (year) => {
    const now = new Date().getFullYear();
    const age = now - year;

    // ans, an,
    let frenchYearStr;
    if (age === 1) {
      frenchYearStr = "an";
    } else if (age === 0) {
      frenchYearStr = "";
    } else {
      frenchYearStr = "ans";
    }
    return `${age} ${frenchYearStr}`;
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <button onClick={this.addTenYears}>+ 10 ans</button>

        {this.state.voitures.map(({ name, year, color }, index) => {
          console.log(index);

          return (
            <div key={index}>
              <Car year={this.getAge(year)} color={color}>
                {name}
              </Car>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Mycars;
