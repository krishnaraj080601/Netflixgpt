// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJAQqqbunUnKyW8ORgff38guztqVQQNzc",
  authDomain: "k111-135ca.firebaseapp.com",
  projectId: "k111-135ca",
  storageBucket: "k111-135ca.appspot.com",
  messagingSenderId: "320073307399",
  appId: "1:320073307399:web:5702ce7037da56867a21a2",
  measurementId: "G-VHPSTQD3TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();