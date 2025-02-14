import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [btn, setBtn] = useState(false);
  console.log(btn);
  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const setLeftImg = () => {
    refWolverine.current.classList.add("left-img");
  };

  const setRightImg = () => {
    refWolverine.current.classList.add("right-img");
  };

  const clearImg = () => {
    if (refWolverine.current.classList.contains("left-img")) {
      refWolverine.current.classList.remove("left-img");
    } else if (refWolverine.current.classList.contains("right-img")) {
      refWolverine.current.classList.remove("right-img");
    }
  };

  const displayBtn = btn && (
    <>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="left-box">
        <Link to={"/signup"} className="btn-welcome">
          Inscription
        </Link>
      </div>
      <div onMouseOver={setRightImg} onMouseOut={clearImg} className="right-box">
        <Link to={"/login"} className="btn-welcome">
          Connexion
        </Link>
      </div>
    </>
  );

  return (
    <main ref={refWolverine} className="welcome-page">
      {displayBtn}
    </main>
  );
};
export default Landing;
