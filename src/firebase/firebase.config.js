// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnHuELIYmpJoEOUsNSZDbmA0LYaDh5Huw",
  authDomain: "pass-comments.firebaseapp.com",
  projectId: "pass-comments",
  storageBucket: "pass-comments.appspot.com",
  messagingSenderId: "227317173477",
  appId: "1:227317173477:web:05b960f329414c8ee6580c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;