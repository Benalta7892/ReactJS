const Btn = ({ changeState, btnStyle, children }) => {
  const customBtn = {
    backgroundColor: "grey",
    border: "none",
    color: "#fff",
    fontSize: "19px",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "7px",
    display: "block" /* Pour les besoin de l'exo */,
    margin: "5px auto",
  };

  return (
    <button onClick={changeState} style={{ ...customBtn, ...btnStyle }}>
      {children}
    </button>
  );
};

export default Btn;
