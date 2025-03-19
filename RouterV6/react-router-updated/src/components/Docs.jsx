import React from "react";
import { useNavigate } from "react-router-dom";

function Docs() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Getting Started</h1>

      <button className="btn btn-primary" onClick={() => navigate("/tutorial")}>
        Vers Tutorial
      </button>
    </div>
  );
}

export default Docs;
