import "./App.css";
import One from "./components/One";
import Two from "./components/Two";

const Title = () => <h1>Salut a tous !</h1>;

function App() {
  return (
    <>
      <Two>
        <Title />
      </Two>
    </>
  );
}

export default App;
