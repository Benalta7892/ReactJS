import { memo } from "react";

function Button({ changeToBatMan }) {
  console.log("%c render() du Button", "color: orange;");

  return <button onClick={changeToBatMan}>Changer en BatMan</button>;
}

export default memo(Button);
