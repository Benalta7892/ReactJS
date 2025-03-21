import "../../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";
import Landing from "../Landing";
import Footer from "../Footer";
import Welcome from "../Welcome";
import Login from "../Login";
import Signup from "../Signup";
import ErrorPage from "../ErrorPage";
import ForgetPassword from "../ForgetPassword";
import { IconContext } from "react-icons";

function App() {
  return (
    <BrowserRouter>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Header />

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </IconContext.Provider>
    </BrowserRouter>
  );
}

export default App;
