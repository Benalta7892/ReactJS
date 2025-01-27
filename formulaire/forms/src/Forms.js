import { Component } from "react";
import Car from "./Car";

class Form extends Component {
  state = {
    username: "",
  };

  handlePseudo = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Car color="red" height="400" />
        <h1>Commentaire</h1>
        <form>
          <label>Pseudo</label>
          <input type="text" value={this.state.username} onChange={this.handlePseudo} />
        </form>
      </div>
    );
  }
}

export default Form;
