import { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", year: 2000, color: "Red" },
      { name: "Mercedes", year: 2010, color: "Black" },
      { name: "Peugeot", year: 2018, color: "Green" },
    ],
    titre: "Mon Catalogue Voitures",
  };

  // noCopy = () => {
  //   alert("Merci de ne pas copier le texte");
  // };

  // addStyle = (e) => {
  //   console.log(e.target);

  //   if (e.target.classList.contains("styled")) {
  //     e.target.classList.remove("styled");
  //   } else {
  //     e.target.classList.add("styled");
  //   }
  // };

  addTenYears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updatedState,
    });
  };

  render() {
    const year = new Date().getFullYear();
    return (
      <div>
        <h1
        // onMouseOver={this.addStyle}
        >
          {this.state.titre}
        </h1>

        <button onClick={this.addTenYears}>+ 10 ans</button>

        {/* <p onCopy={this.noCopy}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> */}

        {/* <Car year={year - this.state.voitures[0].year + " ans"} color={this.state.voitures[0].color}>
          {this.state.voitures[0].name}
        </Car>
        <Car year={year - this.state.voitures[1].year + " ans"} color={this.state.voitures[1].color}>
          {this.state.voitures[1].name}
        </Car>
        <Car year={year - this.state.voitures[2].year + " ans"} color={this.state.voitures[2].color}>
          {this.state.voitures[2].name}
        </Car> */}

        {this.state.voitures.map((voiture, index) => {
          console.log(index);

          return (
            <div key={index}>
              <Car name={voiture.name} year={year - voiture.year + " ans"} color={voiture.color} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Mycars;
