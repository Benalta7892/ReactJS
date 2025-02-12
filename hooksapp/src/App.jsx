import "./App.css";
import FancyInput from "./components/FancyInput";
import { useRef } from "react";

function App() {
  const date = new Date();

  const fancyInputRef = useRef();

  const focusInput = (val) => {
    fancyInputRef.current.focus(val);
    fancyInputRef.current.countMax();

    console.log(fancyInputRef.current);
  };

  return (
    <div className="App">
      <FancyInput name="Toto" ref={fancyInputRef} />
      <button onClick={() => focusInput(date.getDay())}>Cliquer</button>
    </div>
  );
}

export default App;
