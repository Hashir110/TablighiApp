// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB4qj6x8i6TYUunQ145YO3feKqDdFh9cI",
  authDomain: "tablighidataapp.firebaseapp.com",
  projectId: "tablighidataapp",
  storageBucket: "tablighidataapp.firebasestorage.app",
  messagingSenderId: "504965355470",
  appId: "1:504965355470:web:8bbc82092fbdaa1e067d9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export { db };

