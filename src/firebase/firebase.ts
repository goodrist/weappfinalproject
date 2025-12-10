import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEGqO76l2uLredZ4-KrpC76_g5wuyn8so",
  authDomain: "webappfinalproject1.firebaseapp.com",
  projectId: "webappfinalproject1",
  storageBucket: "webappfinalproject1.appspot.com",   // ✅ FIXED
  messagingSenderId: "1070145743068",
  appId: "1:1070145743068:web:c0e7b4fc70d4922a972c19",
  measurementId: "G-PP6SRL0XZT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// EXPORT AUTH + PROVIDER + FIRESTORE
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
