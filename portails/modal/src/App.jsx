import { Component } from "react";
import "./App.css";
import Modal from "./Modal";

class App extends Component {
  state = {
    showModal: false,
  };

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleHide = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const modal = this.state.showModal && <Modal close={this.handleHide} />;

    return (
      <div className="App">
        <button onClick={this.handleShow}>Afficher le Modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
