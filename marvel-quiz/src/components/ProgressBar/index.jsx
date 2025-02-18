import React from "react";

const ProgressBar = ({ idQuestion, maxQuestions }) => {
  const getWidth = (totalQuestion, questionId) => {
    return (100 / totalQuestion) * questionId;
  };

  const actualQuestion = idQuestion + 1;
  const progressPercent = getWidth(maxQuestions, actualQuestion);

  console.log(progressPercent);

  return (
    <>
      <div className="percentage">
        <div className="progress-percent">{`Question : ${actualQuestion}/${maxQuestions}`}</div>
        <div className="progress-percent">{`Progression : ${progressPercent}%`}</div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-change" style={{ width: `${progressPercent}%` }}></div>
      </div>
    </>
  );
};
export default React.memo(ProgressBar);
