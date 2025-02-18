const ProgressBar = () => {
  return (
    <>
      <div className="percentage">
        <div className="progress-percent">Question : 1/10</div>
        <div className="progress-percent">Progression : 10%</div>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-change" style={{ width: "10%" }}></div>
      </div>
    </>
  );
};
export default ProgressBar;
