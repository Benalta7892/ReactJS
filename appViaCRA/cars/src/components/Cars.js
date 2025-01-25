const Car = ({ year, color, name }) => {
  const colorInfo = color ? <p>Couleur : {color}</p> : <p>Couleur : Néant</p>;

  if (name) {
    return (
      <div style={{ backgroundColor: "pink", width: "400px", padding: "10px", margin: "5px auto" }}>
        <p>Marque : {name}</p>
        <p>Age : {year}</p>
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
