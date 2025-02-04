import React, { Component } from "react";

class MyRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.myTitle = React.createRef();
    this.myInput = React.createRef();
  }

  update = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    this.myInput.current.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    this.myTitle.current.style.color = "red";
  }

  handleClick = () => {
    console.log(this.myInput.current.value);
  };

  render() {
    console.log(this.myTitle);
    return (
      <div>
        <h1 ref={this.myTitle}>Valeur : {this.state.value}</h1>
        {/* <input ref={this.myInput} type="text" value={this.state.value} onChange={this.update} /> */}

        <input type="text" ref={this.myInput} />
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default MyRef;
