import { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.popUpContainer = document.createElement("div");
    document.body.appendChild(this.popUpContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popUpContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal" onClick={this.props.close}>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab nihil nesciunt porro adipisci voluptate
            deleniti maiores necessitatibus, saepe inventore odio nulla totam autem fugit eligendi laboriosam impedit
            quisquam dolorum.
          </p>
          <button>Fermer</button>
        </div>
      </div>,
      this.popUpContainer
    );
  }
}

export default Modal;
