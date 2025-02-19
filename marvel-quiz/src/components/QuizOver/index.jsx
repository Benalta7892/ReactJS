import { forwardRef, useEffect, useState } from "react";

const QuizOver = forwardRef((props, ref) => {
  const [asked, setAsked] = useState([]);

  useEffect(() => {
    setAsked(ref.current);
  }, [ref]);

  const questionAnswer = asked.map((question) => {
    return (
      <tr key={question.id}>
        <td>{question.question}</td>
        <td>{question.answer}</td>
        <td>
          <button className="btn-info">Infos</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="steps-btn-container">
        <p className="success-msg">Bravo, vous êtes un expert !</p>
        <button className="btn-result success">Niveau suivant</button>
      </div>

      <div className="percentage">
        <div className="progress-percent">Reussite : 10%</div>
        <div className="progress-percent">Note : 10/10</div>
      </div>
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
