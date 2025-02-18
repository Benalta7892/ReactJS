import { Component } from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";

class Quiz extends Component {
  render() {
    // const { pseudo } = this.props.userData;

    return (
      <div>
        {/* <h2>Pseudo : {pseudo}</h2> */}
        <Levels />
        <ProgressBar />
        <h2>Notre question Quiz</h2>
        <p className="answer-options">Question 1</p>
        <p className="answer-options">Question 2</p>
        <p className="answer-options">Question 3</p>
        <p className="answer-options">Question 4</p>
        <button className="btn-submit">Suivant</button>
      </div>
    );
  }
}
export default Quiz;
