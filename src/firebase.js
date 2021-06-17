// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQkKgw8LX2utrJuXlAo2M12Jw58cDEAy8",
  authDomain: "fir-8b5d1.firebaseapp.com",
  projectId: "fir-8b5d1",
  storageBucket: "fir-8b5d1.appspot.com",
  messagingSenderId: "586650738329",
  appId: "1:586650738329:web:9a579fef811604dbc5a208",
  measurementId: "G-FCPG6MGP4Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
