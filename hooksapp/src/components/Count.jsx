import { useReducer } from "react";

const initialState = {
  countOne: 0,
  countTwo: 0,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "increment":
      return { ...state, countOne: state.countOne + action.value };
    case "decrement":
      return { ...state, countOne: state.countOne - action.value };
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
        <button className="btn btn-success m-3" onClick={() => dispatch({ type: "increment", value: 1 })}>
          +
        </button>
        <button className="btn btn-danger m-3" onClick={() => dispatch({ type: "decrement", value: 1 })}>
          -
        </button>
      </div>

      <div className="col-6">
        {/* <p className="h1">{count}</p>
        <button className="btn btn-success m-3" onClick={() => dispatch("increment")}>
          +
        </button>
        <button className="btn btn-danger m-3" onClick={() => dispatch("decrement")}>
          -
        </button> */}
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
