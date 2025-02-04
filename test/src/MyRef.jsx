import React, { Component } from "react";

class MyRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.myTitle = React.createRef();
  }

  update = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    console.log(this.myTitle);
    return (
      <div>
        <h1 ref={this.myTitle}>Valeur : {this.state.value}</h1>
        <input type="text" value={this.state.value} onChange={this.update} />
      </div>
    );
  }
}

export default MyRef;
