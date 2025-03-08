import { useState } from "react";

const AddBooks = () => {
  const initialState = {
    title: "",
    author: "",
  };

  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newData);
  };

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>

          <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={newData.title}
                type="text"
                className="form-control"
                placeholder="Titre"
                required
                onChange={(e) => setNewData({ ...newData, title: e.target.value })}
              />
            </div>

            <div className="form-group">
              <input
                value={newData.author}
                type="text"
                className="form-control ml-3"
                placeholder="Auteur"
                onChange={(e) => setNewData({ ...newData, author: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <button className="btn btn-outline-secondary ml-3">Ajouter un livre</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              <li className="list-group-item list-group-light d-flex justify-content-between">
                Livres enregistrés ici
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger mt-4 mb-4">Effacer tous les livres</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AddBooks;
