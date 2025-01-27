import { Component } from "react";
import "./myCss.css";

class Form extends Component {
  render() {
    const myClass = this.props.head ? "blue" : "red";

    return (
      <div>
        <h1 className="blue">Commentaire</h1>
        <p className={`${myClass} bigFont`}>Je suis rouge ou bleu</p>
        <button>Valider</button>
      </div>
    );
  }
}

export default Form;
