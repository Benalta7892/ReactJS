import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFectchBooks";

const SearchBooks = () => {
  const [title, setTitle] = useState("");

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    dispatch(fetchBooks(title));
  };

  return (
    <main role="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquez le sujet du livre à rechercher sur Google API</p>

          <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Quoi rechercher ?"
                required
              />
            </div>

            <div className="form-group">
              <button className="btn btn-outline-secondary ml-3">Rechercher</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container" style={{ minHeight: "200px" }}>
        <div className="accordion">
          <div className="card mb-2">
            <div className="card-header"></div>
            <div className="collapse" data-parent="accordion">
              <div className="card-body">
                {
                  // Afficher une image si y'en a
                  // Afficher le titre du livre
                  // Afficher l'Auteur
                  // Afficher la Description
                  // Btn plus infos
                  // Btn Enregistrer
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SearchBooks;
