import { memo } from "react";

function FunctionComp({ name }) {
  console.log("%c render() du FunctionComponent enfant simple", "color: purple;");

  return (
    <>
      <p>
        <span className="purple">Function Component : </span>
        {name}
      </p>
    </>
  );
}

export default memo(FunctionComp);
