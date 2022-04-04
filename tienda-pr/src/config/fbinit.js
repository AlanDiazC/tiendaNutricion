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
  apiKey: "AIzaSyAaOVGOYt_CpYXTkxvn4CrYQvkTDfMkenc",
  authDomain: "tabsfits.firebaseapp.com",
  projectId: "tabsfits",
  storageBucket: "tabsfits.appspot.com",
  messagingSenderId: "764996629572",
  appId: "1:764996629572:web:04f292a2ef63bb17af3811",
  measurementId: "G-KL5VFRY5FD",
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
