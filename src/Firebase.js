import {getAuth , GoogleAuthProvider , FacebookAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMLJgabR3B38gIlN-1x4jO75OgOr3N434",
  authDomain: "ecommerce-1f048.firebaseapp.com",
  projectId: "ecommerce-1f048",
  storageBucket: "ecommerce-1f048.appspot.com",
  messagingSenderId: "914926112428",
  appId: "1:914926112428:web:a97fc9a6f02eabdadc9909",
  measurementId: "G-ZH23QT6B4Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {app,auth,provider};
