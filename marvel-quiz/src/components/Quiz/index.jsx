import React, { Component } from "react";
import Levels from "../Levels";
import ProgressBar from "../ProgressBar";
import { QuizMarvel } from "../quizMarvel";
import { ToastContainer, toast } from "react-toastify";

class Quiz extends Component {
  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
    btnDisabled: true,
    userAnswer: null,
    score: 0,
    showWelcomeMsg: false,
  };

  storedDataRef = React.createRef();

  loadQuestions = (level) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[level];

    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      this.storedDataRef.current = fetchedArrayQuiz;

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

  showWelcomeMsg = (pseudo) => {
    if (!this.state.showWelcomeMsg) {
      this.setState({
        showWelcomeMsg: true,
      });

      toast.success(`🦄 Bienvenue ${pseudo} et bonne chance !`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        // progress: undefined,
        theme: "colored",
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
      });
    }

    if (this.state.idQuestion !== prevState.idQuestion) {
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
        userAnswer: null,
        btnDisabled: true,
      });
    }

    if (this.props.userData.pseudo) {
      this.showWelcomeMsg(this.props.userData.pseudo);
    }
  }

  nextQuestion = () => {
    if (this.state.idQuestion === this.state.maxQuestions - 1) {
      // end
    } else {
      this.setState((prevState) => ({
        idQuestion: prevState.idQuestion + 1,
      }));
    }

    const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;
    if (this.state.userAnswer === goodAnswer) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));

      toast.success("🦄 Bravo +1 !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        bodyClassName: "toastify-color",
      });
    } else {
      toast.error("🦄 Raté 0 !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        bodyClassName: "toastify-color",
      });
    }
  };

  submitAnswer = (selectedAnswer) => {
    this.setState({
      userAnswer: selectedAnswer,
      btnDisabled: false,
    });
  };

  render() {
    // const { pseudo } = this.props.userData;

    const displayOptions = this.state.options.map((option, index) => {
      return (
        <p
          key={index}
          onClick={() => this.submitAnswer(option)}
          className={`answer-options ${this.state.userAnswer === option ? "selected" : null}`}>
          {option}
        </p>
      );
    });

    return (
      <div>
        {/* <h2>Pseudo : {pseudo}</h2> */}
        <ToastContainer />
        <Levels />
        <ProgressBar />
        <h2>{this.state.question}</h2>

        {displayOptions}

        <button onClick={this.nextQuestion} disabled={this.state.btnDisabled} className="btn-submit">
          Suivant
        </button>
      </div>
    );
  }
}
export default Quiz;
