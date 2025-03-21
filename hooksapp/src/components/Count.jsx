import { useReducer } from "react";

const initialState = {
  countOne: 0,
  countTwo: 0,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "increment1":
      return { ...state, countOne: state.countOne + action.value };
    case "decrement1":
      return { ...state, countOne: state.countOne - action.value };
    case "increment2":
      return { ...state, countTwo: state.countTwo + action.value };
    case "decrement2":
      return { ...state, countTwo: state.countTwo - action.value };
    case "reinitialise":
      return initialState;
    default:
      return state;
  }
};

function Count() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="row">
      <div className="col-6">
        <p className="h1">{count.countOne}</p>
        <button className="btn btn-success m-3" onClick={() => dispatch({ type: "increment1", value: 1 })}>
          +
        </button>
        <button className="btn btn-danger m-3" onClick={() => dispatch({ type: "decrement1", value: 1 })}>
          -
        </button>
      </div>

      <div className="col-6">
        <p className="h1">{count.countTwo}</p>
        <button className="btn btn-success m-3" onClick={() => dispatch({ type: "increment2", value: 10 })}>
          +
        </button>
        <button className="btn btn-danger m-3" onClick={() => dispatch({ type: "decrement2", value: 10 })}>
          -
        </button>
      </div>

      <div className="col">
        <button className="btn btn-primary m-3" onClick={() => dispatch({ type: "reinitialise" })}>
          0
        </button>
      </div>
    </div>
  );
}
export default Count;
