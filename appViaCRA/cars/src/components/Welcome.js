const Welcome = () => {
  const bonjour = () => {
    console.log("Bonjour");
  };

  const bonsoir = (param) => {
    console.log(param);
  };

  return (
    <div>
      {/* Invoquer une fonction "bonjour" qui affichera console.log("bonjour") */}
      <button onClick={() => bonjour()}>Invoquer une fonction</button>

      {/* Invoquer une fonction "bonsoir" avec un argument "Bonsoir" et l'afficher dans un console.log */}
      <button onClick={() => bonsoir("Bonsoir")}>Invoquer une fonction avec arg "Bonsoir</button>

      {/* Lancer le console.log("Bonne nuit") après le click sans invoquer de fonction */}
      <button onClick={() => console.log("Bonne nuit")}>Clg sur le bouton</button>
    </div>
  );
};

export default Welcome;
