import { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

function ClickSayHello() {
  const [text, setText] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    if (isTrue) {
      setText("Bonjour");
    } else {
      setText("Bonsoir");
    }
  }, [isTrue]);

  // Custom Hook
  useUpdateDocTitle(text);

  return <button onClick={() => setIsTrue(!isTrue)}>Cliquez ici</button>;
}
export default ClickSayHello;
