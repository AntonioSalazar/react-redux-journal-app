import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6YL6IKgkWwLcyV_B9pIuJXHU6UlGIQBE",
    authDomain: "react-redux-app-417cb.firebaseapp.com",
    projectId: "react-redux-app-417cb",
    storageBucket: "react-redux-app-417cb.appspot.com",
    messagingSenderId: "15146470487",
    appId: "1:15146470487:web:b34d3061f1bc6b3e4da712"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}