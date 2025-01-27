import { Component } from "react";

const titreRouge = {
  fontSize: "50px",
  color: "red",
};

class Form extends Component {
  render() {
    return (
      <div>
        <h1 style={titreRouge}>Commentaire</h1>
        <button>Valider</button>
      </div>
    );
  }
}

export default Form;
