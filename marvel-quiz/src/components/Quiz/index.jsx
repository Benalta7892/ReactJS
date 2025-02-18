import { Component } from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";
import { QuizMarvel } from "../quizMarvel";

class Quiz extends Component {
  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
  };

  loadQuestions = (level) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[level];

    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      const newArray = fetchedArrayQuiz.map(({ answer, ...keepRest }) => keepRest);
      this.setState({
        storedQuestions: newArray,
      });
    } else {
      console.log("Pas assz de questions !");
    }
  };

  componentDidMount() {
    this.loadQuestions(this.state.levelNames[this.state.quizLevel]);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: null,
        options: [],
      });
    }
  }

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
