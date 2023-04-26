import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAv3zMz0oCAqiopV813s6glbpTEdehOaMg",
  authDomain: "social-network-72233.firebaseapp.com",
  projectId: "social-network-72233",
  storageBucket: "social-network-72233.appspot.com",
  messagingSenderId: "1080166071891",
  appId: "1:1080166071891:web:f9889827cfc04df05410a6"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };