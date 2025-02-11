import { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  addOne = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Class State : {this.state.counter}</p>
        <button onClick={this.addOne}>+ 1</button>
      </div>
    );
  }
}

export default ClassState;
