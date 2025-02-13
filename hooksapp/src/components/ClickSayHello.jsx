import { useState, useEffect } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";

function ClickSayHello() {
  const [text, setText] = useState("");

  // Custom Hook
  useUpdateDocTitle(text);

  return <button onClick={() => setText("Hello World")}>Cliquez ici</button>;
}
export default ClickSayHello;
