import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//     this.auth = app.auth();
//   }
// }

// // Inscription
// signupUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

// // Connexion
// loginUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

// // Deconnexion
// signoutUser = () => this.auth.signOut();

const app = initializeApp(config);
export const auth = getAuth(app);

// export default app;
