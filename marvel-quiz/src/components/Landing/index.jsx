import { useRef, useEffect, useState } from "react";

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

  const displayBtn = btn && (
    <>
      <div className="left-box">
        <button className="btn-welcome">Inscription</button>
      </div>
      <div className="right-box">
        <button className="btn-welcome">Connexion</button>
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
