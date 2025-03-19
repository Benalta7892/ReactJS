import React from "react";
import { useNavigate } from "react-router-dom";

function Tutorials() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Tutoriel: Intro to React</h1>

      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Retour vers Docs
      </button>

      <button className="btn btn-success" onClick={() => navigate("/community")}>
        Vers Community
      </button>
    </div>
  );
}

export default Tutorials;
