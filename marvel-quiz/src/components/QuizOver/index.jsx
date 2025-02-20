/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import Loader from "../Loader";

const QuizOver = forwardRef((props, ref) => {
  const { levelNames, score, maxQuestions, quizLevel, percent, loadLevelQuestions } = props;

  const [asked, setAsked] = useState([]);

  useEffect(() => {
    setAsked(ref.current);
  }, [ref]);

  const averageGrade = maxQuestions / 2;

  if (score < averageGrade) {
    setTimeout(() => {
      loadLevelQuestions(quizLevel);
    }, 3000);
  }

  const decision =
    score >= averageGrade ? (
      <>
        <div className="steps-btn-container">
          {quizLevel < levelNames.length ? (
            <>
              <p className="success-msg">Bravo, passez au niveau suivant !</p>
              <button onClick={() => loadLevelQuestions(quizLevel)} className="btn-result success">
                Niveau suivant
              </button>
            </>
          ) : (
            <>
              <p className="success-msg">
                <GiTrophyCup size="50px" /> Bravo, vous êtes un expert !
              </p>
              <button onClick={() => loadLevelQuestions(0)} className="btn-result game-over">
                Accueil
              </button>
            </>
          )}
        </div>

        <div className="percentage">
          <div className="progress-percent">Reussite : {percent}%</div>
          <div className="progress-percent">
            Note : {score}/{maxQuestions}
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="steps-btn-container">
          <p className="failure-msg">Vous avez échoué !</p>
        </div>

        <div className="percentage">
          <div className="progress-percent">Reussite : {percent}%</div>
          <div className="progress-percent">
            Note : {score}/{maxQuestions}
          </div>
        </div>
      </>
    );

  const questionAnswer =
    score >= averageGrade ? (
      asked.map((question) => {
        return (
          <tr key={question.id}>
            <td>{question.question}</td>
            <td>{question.answer}</td>
            <td>
              <button className="btn-info">Infos</button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="3">
          <Loader loadingMsg={"Pas de réponse !"} styling={{ textAlign: "center", color: "red" }} />
        </td>
      </tr>
    );

  return (
    <>
      {decision}

      <hr />
      <p>Les réponses aux questions posées : </p>

      <div className="answer-container">
        <table className="answers">
          <thead>
            <tr>
              <th>Question</th>
              <th>Réponses</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>{questionAnswer}</tbody>
        </table>
      </div>
    </>
  );
});

QuizOver.displayName = "QuizOver";

export default QuizOver;
