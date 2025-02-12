function Button({ handleClick, btnColor, increment, children }) {
  return (
    <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor} m-3`}>
      + {increment} %
    </button>
  );
}
export default Button;
