// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Correct import for Firestore
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxhyZUgP0Wh8kbICKD4qJTJN8hsVYzj-U",
  authDomain: "netflex-clouse-pr.firebaseapp.com",
  projectId: "netflex-clouse-pr",
  storageBucket: "netflex-clouse-pr.appspot.com",
  messagingSenderId: "873465035283",
  appId: "1:873465035283:web:b2392be9c2c7f78cd35de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();
export const database=getFirestore();