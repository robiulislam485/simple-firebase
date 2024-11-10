// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzoB4ud2aPAJbZzt7GlKUm932bLaiDB2k",
  authDomain: "simple-firebase-2ee4d.firebaseapp.com",
  projectId: "simple-firebase-2ee4d",
  storageBucket: "simple-firebase-2ee4d.firebasestorage.app",
  messagingSenderId: "964724323610",
  appId: "1:964724323610:web:575f2648f32cd6e53d28a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;