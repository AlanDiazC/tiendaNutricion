// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJnzDwDnRjhP-5WYFMcggEYICQHc9MheA",
  authDomain: "pr-nutrition.firebaseapp.com",
  projectId: "pr-nutrition",
  storageBucket: "pr-nutrition.appspot.com",
  messagingSenderId: "90388717871",
  appId: "1:90388717871:web:6768ca83d54883474941da",
  measurementId: "G-G0KGSXFQ59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}