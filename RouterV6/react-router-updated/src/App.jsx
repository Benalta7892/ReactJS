// import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Menu />

      <Routes>
        {/* Redirection de "/" vers "/docs" */}
        <Route path="/" element={<Navigate to="/docs" />} />

        {/* Les routes */}
        <Route path="/docs" element={<Docs />} />
        <Route path="/tutorial" element={<Tutorials />} />
        <Route path="/community" element={<Community />} />

        {/* Page d'erreur */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
