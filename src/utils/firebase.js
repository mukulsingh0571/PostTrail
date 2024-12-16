// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "posttrail-378a8.firebaseapp.com",
  projectId: "posttrail-378a8",
  storageBucket: "posttrail-378a8.firebasestorage.app",
  messagingSenderId: "650730953329",
  appId: "1:650730953329:web:0fb0ca231893639b9a99d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);