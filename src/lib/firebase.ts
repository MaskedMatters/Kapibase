// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7nzGZaYLWeR84HFWC8SSLCvKHfpBtmsA",
    authDomain: "kapibase.firebaseapp.com",
    projectId: "kapibase",
    storageBucket: "kapibase.firebasestorage.app",
    messagingSenderId: "939315981596",
    appId: "1:939315981596:web:f34b4d06bde1bbb8741ed9",
    measurementId: "G-WWF81SZDNJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);