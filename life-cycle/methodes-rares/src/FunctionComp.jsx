function FunctionComp({ name }) {
  console.log("%c render() du FunctionComponent enfant simple", "color: purple;");

  return (
    <div>
      <p>
        <span className="purple">Function Component : </span>
        {name}
      </p>
    </div>
  );
}

export default FunctionComp;
