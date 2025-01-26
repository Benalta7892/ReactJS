const Car = ({ year, color, children }) => {
  const colorInfo = color ? <p>Couleur : {color}</p> : <p>Couleur : Néant</p>;

  if (children) {
    return (
      <div style={{ backgroundColor: "pink", width: "400px", padding: "10px", margin: "5px auto" }}>
        <p>Marque : {children}</p>
        <p>Âge : {year}</p>
        {colorInfo}
      </div>
    );
  }

  // return (
  //   <div style={{ backgroundColor: "pink", width: "400px", padding: "10px", margin: "5px auto" }}>
  //     <p>Pas de data</p>
  //   </div>
  // );

  return null; // ce return est Facultatif
};

export default Car;
