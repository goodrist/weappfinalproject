// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEGqO76l2uLredZ4-KrpC76_g5wuyn8so",
  authDomain: "webappfinalproject1.firebaseapp.com",
  projectId: "webappfinalproject1",
  storageBucket: "webappfinalproject1.firebasestorage.app",
  messagingSenderId: "1070145743068",
  appId: "1:1070145743068:web:c0e7b4fc70d4922a972c19",
  measurementId: "G-PP6SRL0XZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);