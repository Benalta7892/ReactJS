import "./App.css";
import Result from "./components/Game";
import { Container, Button } from "react-bootstrap";

function App() {
  const customBtn = {
    backgroundColor: "grey",
    border: "none",
    color: "black",
    fontSize: "19px",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "7px",
    display: "block" /* Pour les besoin de l'exo */,
    margin: "16px auto",
  };

  const sayHello = () => alert("Hello World");
  return (
    <Container>
      <Result />
      <Button variant="warning" onClick={sayHello} style={customBtn}>
        Say Hello
      </Button>
    </Container>
  );
}

export default App;
