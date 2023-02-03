// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUtwgCBc5Qu8Ur62hNO2YQ1iIWm_bGYdY",
  authDomain: "habitician.firebaseapp.com",
  projectId: "habitician",
  storageBucket: "habitician.appspot.com",
  messagingSenderId: "754810832554",
  appId: "1:754810832554:web:edc704336d8761a114b2d3",
  measurementId: "G-QGZPQTWZE8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
