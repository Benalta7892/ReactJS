import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Docs from "./components/Docs";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";
import Menu from "./components/Menu";
import ErrorPage from "./components/ErrorPage";
import Installation from "./components/Installation";
import Fondamentaux from "./components/Fondamentaux";
import Hooks from "./components/Hooks";
import Users from "./components/Users";
import Profile from "./components/Profile";
import NoteUsers from "./components/NoteUsers";
import { lazy, Suspense } from "react";
// import Blog from "./components/Blog";
const LazyBlog = lazy(() => import("./components/Blog"));

function App() {
  return (
    <>
      <Menu />

      <Routes>
        {/* Redirection de "/" vers "/docs" */}
        <Route path="/" element={<Navigate to="/docs" replace />} />

        {/* Les routes */}
        <Route path="/docs" element={<Docs />}>
          <Route index element={<Installation />} />
          <Route path="installation" element={<Installation />} />
          <Route path="fondamentaux" element={<Fondamentaux />} />
          <Route path="hooks" element={<Hooks />} />
        </Route>
        <Route path="/tutorial" element={<Tutorials />} />
        <Route path="/community" element={<Community />} />

        <Route path="users" element={<Users />}>
          <Route path=":id" element={<Profile />} />
          <Route path="noteUsers" element={<NoteUsers />} />
        </Route>

        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div>Chargement des articles...</div>}>
              <LazyBlog />
            </Suspense>
          }
        />

        {/* Page d'erreur */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
