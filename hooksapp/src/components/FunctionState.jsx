import { useState } from "react";

const FunctionState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Function State : {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+ 1</button>
    </div>
  );
};

export default FunctionState;
