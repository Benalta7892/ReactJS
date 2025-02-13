import { useId } from "react";

function NewsLetter() {
  const id = useId();

  const container = {
    background: "PaleGoldenrod",
    padding: "19px",
    width: "60%",
    margin: "9px auto",
    border: "1px orange dashed",
  };
  return (
    <div style={container}>
      <label htmlFor={id}>NewsLetter</label>
      <div>
        <input id={id} type="email" name="email" placeholder="Votre email" />
      </div>
    </div>
  );
}
export default NewsLetter;
