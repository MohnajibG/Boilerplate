// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXgNrV7OpIpiBYSDSGkhc95670zcUluQk",
  authDomain: "boilerplate-650a4.firebaseapp.com",
  projectId: "boilerplate-650a4",
  storageBucket: "boilerplate-650a4.firebasestorage.app",
  messagingSenderId: "522601327905",
  appId: "1:522601327905:web:54f9d3a6a6b9fb6c486260",
  measurementId: "G-LQ7ZWGWL7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
