const Car = ({ children, color }) => {
  let colorInfo = "";
  if (color) {
    colorInfo = color;
  } else {
    colorInfo = "Néant";
  }

  if (children) {
    return (
      <div style={{ backgroundColor: "pink", width: "400px", padding: "10px", margin: "5px auto" }}>
        <p>Marque : {children}</p>
        {/* {color ? <p>Couleur : {color}</p> : <p>Couleur : Néant</p>} */}
        {/* <p>Couleur : {color ? color : "Néant"}</p> */}
        <p>Couleur : {colorInfo}</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "pink", width: "400px", padding: "10px", margin: "5px auto" }}>
      <p>Pas de data !</p>
    </div>
  );

  // return children ? (
  //   <div style={{ backgroundColor: "pink", width: "400px", padding: "10px", margin: "5px auto" }}>
  //     <p>Marque : {children}</p>
  //     {/* {color ? <p>Couleur : {color}</p> : <p>Couleur : Néant</p>} */}
  //     {/* <p>Couleur : {color ? color : "Néant"}</p> */}
  //     <p>Couleur : {colorInfo}</p>
  //   </div>
  // ) : (
  //   <div style={{ backgroundColor: "pink", width: "400px", padding: "10px", margin: "5px auto" }}>
  //     <p>Pas de data !</p>
  //   </div>
  // );
};

export default Car;
