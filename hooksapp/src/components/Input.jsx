import { useRef, useState } from "react";

function Input() {
  const [name, setName] = useState(null);

  const usernameRef = useRef(null);
  console.log(usernameRef);

  const handleSubmit = () => {
    setName(usernameRef.current.value);
  };

  return (
    <div>
      <p>{name}</p>
      <input ref={usernameRef} type="text" />
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
}
export default Input;
