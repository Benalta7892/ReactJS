import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tutorials() {
  const [underConst, setUnderConst] = useState({
    Docs: false,
    Tutorials: true,
    Community: false,
  });
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <div className="container">
      {underConst.Tutorials ? (
        <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
          <strong>Holy guacamole!</strong> Cette page n'existe pas ! Redirection dans 5 secondes...
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      ) : (
        <h1>Tutoriel: Intro to React</h1>
      )}

      {/* <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Retour vers Docs
      </button>

      <button className="btn btn-success" onClick={() => navigate("/community")}>
        Vers Community
      </button> */}
    </div>
  );
}

export default Tutorials;
