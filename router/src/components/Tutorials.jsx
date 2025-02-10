const Tutorials = (props) => {
  console.log(props);

  setTimeout(() => {
    props.history.push("/");
  }, 5000);

  return (
    <div className="container mt-3">
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Oups, </strong> cette page est en construction. Vous allez être redirigé vers la page d'accueil "Docs"
        dans 5 secondes.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <h1>Tutoriel : intro à React</h1>
    </div>
  );
};

export default Tutorials;
