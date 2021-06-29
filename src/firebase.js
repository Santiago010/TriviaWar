import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtqmgfmsn7xUkfwsYtuuHnBg-S6dxrF94",
  authDomain: "game-trivia-1a43d.firebaseapp.com",
  projectId: "game-trivia-1a43d",
  storageBucket: "game-trivia-1a43d.appspot.com",
  messagingSenderId: "908075261911",
  appId: "1:908075261911:web:0da2f823fd71e104043592",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
