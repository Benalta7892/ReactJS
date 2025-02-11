import { useState } from "react";

const FunctionState = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Function State : {count}</p>
      <button onClick={addOne}>+ 1</button>
    </div>
  );
};

export default FunctionState;
