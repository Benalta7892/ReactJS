import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [underConst, setUnderConst] = useState({
    Docs: false,
    Tutorials: true,
    Community: false,
  });

  return (
    <>
      <Menu />

      <Routes>
        {/* Redirection de "/" vers "/docs" */}
        <Route path="/" element={<Navigate to="/docs" replace />} />

        <Route path="/tutorial" element={<Navigate to="/docs" replace />} />

        {/* Les routes */}
        <Route path="/docs" element={<Docs />} />
        <Route path="/tutorial" element={underConst.Tutorials ? <Navigate to="/docs" /> : <Tutorials />} />
        <Route path="/community" element={<Community />} />

        {/* Page d'erreur */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
