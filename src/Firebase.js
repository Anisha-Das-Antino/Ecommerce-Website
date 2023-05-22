import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBt-ztZ8s0Kl9-NY1g_jEPl9RocI4sR08s",
  authDomain: "ecommerce-cebbe.firebaseapp.com",
  projectId: "ecommerce-cebbe",
  storageBucket: "ecommerce-cebbe.appspot.com",
  messagingSenderId: "380765606340",
  appId: "1:380765606340:web:f0e64f2260334e3c6e1491",
  measurementId: "G-WFGGNWCT5F",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result?.user?.accessToken, "---------------");
      localStorage.setItem("token", result?.user?.accessToken);
    })
    .catch((error) => {
      console.log(error);
    });
};

const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { app, auth, signInWithGoogle, signInWithFacebook };
