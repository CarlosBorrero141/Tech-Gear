import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD1tIFk66jmGF0NHwyS0QFmOipLMTRoRhk",
    authDomain: "tech-gear-cc0a9.firebaseapp.com",
    projectId: "tech-gear-cc0a9",
    storageBucket: "tech-gear-cc0a9.appspot.com",
    messagingSenderId: "868283000418",
    appId: "1:868283000418:web:aa565579b55f07514a533b",
    measurementId: "G-71HW76XXRN"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();