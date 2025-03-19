import React from "react";
import { useNavigate } from "react-router-dom";

function Community() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Where to get support</h1>

      <button className="btn btn-success" onClick={() => navigate("/")}>
        Retour vers Docs
      </button>

      <button className="btn btn-danger" onClick={() => navigate(-2)}>
        -2
      </button>
    </div>
  );
}

export default Community;
