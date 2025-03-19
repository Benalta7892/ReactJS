import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

function Docs() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Getting Started</h1>

      <nav className="nav">
        <Link className="nav-link" aria-current="page" to="installation">
          Installation
        </Link>
        <Link className="nav-link" to="fondamentaux">
          Fondamentaux
        </Link>
        <Link className="nav-link" to="hooks">
          Hooks
        </Link>
      </nav>

      <Outlet />

      <br />

      <button className="btn btn-primary" onClick={() => navigate("/tutorial", { replace: true })}>
        Vers Tutorial
      </button>
    </div>
  );
}

export default Docs;
