import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBr0-juvU4Ovjf2PPS7SYxVwbmlrmM7_VI",
  authDomain: "instagram-clone-29786.firebaseapp.com",
  projectId: "instagram-clone-29786",
  storageBucket: "instagram-clone-29786.appspot.com",
  messagingSenderId: "809935802755",
  appId: "1:809935802755:web:f2c6f7e79a30d0da6826b6"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };