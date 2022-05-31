// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import AWS from "aws-sdk";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJnzDwDnRjhP-5WYFMcggEYICQHc9MheA",
  authDomain: "pr-nutrition.firebaseapp.com",
  projectId: "pr-nutrition",
  storageBucket: "pr-nutrition.appspot.com",
  messagingSenderId: "90388717871",
  appId: "1:90388717871:web:6768ca83d54883474941da",
  measurementId: "G-G0KGSXFQ59",
};

// const digitalOceanConfig = new AWS.S3({
//   endpoint: "sfo3.digitaloceanspaces.com",
//   accessKeyId: "IELBAV4GOJB2QVHOKJKY",
//   secretAccessKey: "ydp+I12vHmi+GRVx/udstDvhYVPt+Kbe+DoYKWsogQQ",
// });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// export { app, analytics, auth, db, digitalOceanConfig };
export { app, analytics, auth, db };
