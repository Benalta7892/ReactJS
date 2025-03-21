import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFectchBooks";
import { addBook } from "../redux/actions/actionAddBooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBooks = () => {
  const notify = () => toast("Wow c'est enregistré !");

  const [title, setTitle] = useState("");

  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    dispatch(fetchBooks(title));
  };

  const handleSave = (title, author) => {
    const bookToSave = {
      title: title,
      author: author,
    };
    dispatch(addBook(bookToSave));
  };

  const displayFetchedBooks = state.isLoading ? (
    <div className="d-flex justify-centent-center">
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : state.error !== "" ? (
    <p>{state.error}</p>
  ) : (
    state.fetchedBooks.map((data) => {
      return (
        <div className="card mb-2" key={data.id}>
          <div className="card-header">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target={`#${data.id}`}
                aria-expanded="false">
                {data.volumeInfo.title}
              </button>
            </h5>
          </div>
          <div id={data.id} className="collapse" data-parent="#accordion">
            <div className="card-body">
              {/* Afficher une image si y'en a */}
              {data.volumeInfo.hasOwnProperty("imageLinks") && (
                <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />
              )}
              <br />

              {/* Afficher le titre du livre */}
              <h4 className="card-title">Titre : {data.volumeInfo.title}</h4>

              {/* Afficher l'Auteur */}
              <h5 className="card-title">Auteurs : {data.volumeInfo.authors}</h5>

              {/* Afficher la Description */}
              <p className="card-text">Description : {data.volumeInfo.description}</p>

              {/* Btn plus infos */}
              <a
                href={data.volumeInfo.previewLink}
                target="_blank"
                rel="noopener norefeerer"
                className="btn btn-outline-secondary">
                Plus d'infos
              </a>

              {/* Btn Enregistrer */}
              <button
                className="btn btn-outline-secondary ml-4"
                onClick={() => {
                  notify();
                  handleSave(data.volumeInfo.title, data.volumeInfo.authors);
                }}>
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      );
    })
  );

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
        <div id="accordion">{displayFetchedBooks}</div>
      </div>
      <ToastContainer position="bottom-right" />;
    </main>
  );
};
export default SearchBooks;
