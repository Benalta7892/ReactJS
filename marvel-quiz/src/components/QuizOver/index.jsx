/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import Loader from "../Loader";
import Modal from "../modal";
import axios from "axios";

const QuizOver = forwardRef((props, ref) => {
  const { levelNames, score, maxQuestions, quizLevel, percent, loadLevelQuestions } = props;

  const VITE_MARVEL_API_KEY = import.meta.env.VITE_MARVEL_API_KEY;
  const hash = import.meta.env.VITE_MARVEL_API_HASH;

  const [asked, setAsked] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [characterInfos, setCharacterInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAsked(ref.current);
    if (localStorage.getItem("marvelStorageDate")) {
      const date = localStorage.getItem("marvelStorageDate");
      checkDataAge(date);
    }
  }, [ref]);

  const checkDataAge = (date) => {
    const today = Date.now();
    const timeDiff = today - date;
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff >= 15) {
      localStorage.clear();
      localStorage.setItem("marvelStorageDate", Date.now());
    }
  };

  const showModal = (id) => {
    setOpenModal(true);

    if (localStorage.getItem(id)) {
      setCharacterInfos(JSON.parse(localStorage.getItem(id)));
      setLoading(false);
    } else {
      axios
        .get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${VITE_MARVEL_API_KEY}&hash=${hash}`)
        .then((response) => {
          setCharacterInfos(response.data);
          setLoading(false);

          localStorage.setItem(id, JSON.stringify(response.data));
          if (!localStorage.getItem("marvelStorageDate")) {
            localStorage.setItem("marvelStorageDate", Date.now());
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const hideModal = () => {
    setOpenModal(false);
    setLoading(true);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const averageGrade = maxQuestions / 2;

  if (score < averageGrade) {
    setTimeout(() => {
      loadLevelQuestions(quizLevel);
    }, 3000);
  }

  const decision =
    score >= averageGrade ? (
      <>
        <div className="steps-btn-container">
          {quizLevel < levelNames.length ? (
            <>
              <p className="success-msg">Bravo, passez au niveau suivant !</p>
              <button onClick={() => loadLevelQuestions(quizLevel)} className="btn-result success">
                Niveau suivant
              </button>
            </>
          ) : (
            <>
              <p className="success-msg">
                <GiTrophyCup size="50px" /> Bravo, vous êtes un expert !
              </p>
              <button onClick={() => loadLevelQuestions(0)} className="btn-result game-over">
                Accueil
              </button>
            </>
          )}
        </div>

        <div className="percentage">
          <div className="progress-percent">Reussite : {percent}%</div>
          <div className="progress-percent">
            Note : {score}/{maxQuestions}
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="steps-btn-container">
          <p className="failure-msg">Vous avez échoué !</p>
        </div>

        <div className="percentage">
          <div className="progress-percent">Reussite : {percent}%</div>
          <div className="progress-percent">
            Note : {score}/{maxQuestions}
          </div>
        </div>
      </>
    );

  const questionAnswer =
    score >= averageGrade ? (
      asked.map((question) => {
        return (
          <tr key={question.id}>
            <td>{question.question}</td>
            <td>{question.answer}</td>
            <td>
              <button className="btn-info" onClick={() => showModal(question.heroId)}>
                Infos
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="3">
          <Loader loadingMsg={"Pas de réponse !"} styling={{ textAlign: "center", color: "red" }} />
        </td>
      </tr>
    );

  const resultInModal = !loading ? (
    <>
      <div className="modal-header">
        <h2>{characterInfos.data.results[0].name}</h2>
      </div>
      <div className="modal-body">
        <div className="comicImage">
          <img
            src={
              characterInfos.data.results[0].thumbnail.path + "." + characterInfos.data.results[0].thumbnail.extension
            }
            alt={characterInfos.data.results[0].name}
          />

          {characterInfos.attributionText}
        </div>
        <div className="comic-details">
          <h3>Description</h3>
          {characterInfos.data.results[0].description ? (
            <p>characterInfos.data.results[0].description</p>
          ) : (
            <p>Description indisponible...</p>
          )}
          <h3>Plus d&apos;infos</h3>
          {characterInfos.data.results[0].urls &&
            characterInfos.data.results[0].urls.map((url, index) => {
              return (
                <a key={index} href={url.url} target="_blank" rel="noopener noreferrer">
                  {capitalizeFirstLetter(url.type)}
                </a>
              );
            })}
        </div>
      </div>
      <div className="modal-footer">
        <button className="modal-btn" onClick={hideModal}>
          Fermer
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="modal-header">
        <h2>Réponse de Marvel...</h2>
      </div>
      <div className="modal-body">
        <Loader />
      </div>
    </>
  );

  return (
    <>
      {decision}

      <hr />
      <p>Les réponses aux questions posées : </p>

      <div className="answer-container">
        <table className="answers">
          <thead>
            <tr>
              <th>Question</th>
              <th>Réponses</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>{questionAnswer}</tbody>
        </table>
      </div>

      <Modal showModal={openModal} hideModal={hideModal}>
        {resultInModal}
      </Modal>
    </>
  );
});

QuizOver.displayName = "QuizOver";

export default QuizOver;
