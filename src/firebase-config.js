// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, updateProfile} from 'firebase/auth';
import {getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPBeK7eNwnrthpwQ_dlHNoaTxaO85qgnw",
  authDomain: "unimatchup.firebaseapp.com",
  projectId: "unimatchup",
  storageBucket: "unimatchup.appspot.com",
  messagingSenderId: "126882329606",
  appId: "1:126882329606:web:f3adf809b9fe3290b03f87",
  measurementId: "G-5QS1F352V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

//Firestore
export const database = getFirestore(app);