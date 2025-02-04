import React, { Component } from "react";

class MyRef extends Component {
  constructor(props) {
    super(props);

    this.myInput = React.createRef();
  }

  addFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.myInput} />
      </div>
    );
  }
}

export default MyRef;
