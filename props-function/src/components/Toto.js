const Toto = ({ name, leState, reponseToto }) => {
  // console.log(reponseToto);

  const btnReponseToto =
    leState.messageMaman !== null ? <button onClick={reponseToto}>Réponse</button> : <button disabled>Réponse</button>;

  return (
    <div>
      <h2>Je suis {name}</h2>
      {btnReponseToto}
      <p>{leState.messageToto}</p>
    </div>
  );
};

export default Toto;
