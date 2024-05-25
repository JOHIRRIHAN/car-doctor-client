import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSCjRAYpMJN9sEBCvAnj2xPlpGXs1iRzs",
  authDomain: "car-doctor-auth-a4c01.firebaseapp.com",
  projectId: "car-doctor-auth-a4c01",
  storageBucket: "car-doctor-auth-a4c01.appspot.com",
  messagingSenderId: "218084678575",
  appId: "1:218084678575:web:015d3a972745bb8e4d6d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
