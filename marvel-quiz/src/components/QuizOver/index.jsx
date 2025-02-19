import { forwardRef, useEffect, useState } from "react";

const QuizOver = forwardRef((props, ref) => {
  const { levelNames, score, maxQuestions, quizLevel, percent } = props;

  const [asked, setAsked] = useState([]);

  useEffect(() => {
    setAsked(ref.current);
  }, [ref]);

  const averageGrade = maxQuestions / 2;

  const decision =
    score >= averageGrade ? (
      <>
        <div className="steps-btn-container">
          {quizLevel < levelNames.length ? (
            <>
              <p className="success-msg">Bravo, passez au niveau suivant !</p>
              <button className="btn-result success">Niveau suivant</button>
            </>
          ) : (
            <>
              <p className="success-msg">Bravo, vous êtes un expert !</p>
              <button className="btn-result game-over">Niveau suivant</button>
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
          <p style={{ textAlign: "center", color: "red" }}>Pas de réponses !</p>
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
