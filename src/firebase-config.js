// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8WLQlWz5S4j9RP0QZdjW97u2gzzwdBXE",
  authDomain: "chatapp-22dcb.firebaseapp.com",
  projectId: "chatapp-22dcb",
  storageBucket: "chatapp-22dcb.appspot.com",
  messagingSenderId: "1062621585069",
  appId: "1:1062621585069:web:b89ba8a162ab71023cf024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();