import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, user } from "../Firebase/firebaseConfig";
import { getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout";
import Quiz from "../Quiz";

const Welcome = () => {
  const navigate = useNavigate();

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      user ? setUserSession(user) : navigate("/");
    });

    if (!!userSession) {
      const colRef = user(userSession.uid);

      getDoc(colRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const docData = snapshot.data();
            setUserData(docData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return listener;
  }, [userSession, navigate]);

  return userSession === null ? (
    <>
      <div className="loader"></div> <p>Loading...</p>
    </>
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout />
        <Quiz userData={userData} />
      </div>
    </div>
  );
};
export default Welcome;
