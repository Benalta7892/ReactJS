import { useRef } from "react";

function Title() {
  console.log("Composant titre chargé");

  const h1Renders = useRef(0);
  console.log(h1Renders);

  setInterval(() => {
    h1Renders.current++;
    console.log(h1Renders.current);
  }, 1000);

  return (
    <div>
      <p>{h1Renders.current}</p>
    </div>
  );
}
export default Title;
