// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnYu3LBeHfv0E9_9sN0QPxKV2mvRzPXhg",
  authDomain: "email-password-auth-20e85.firebaseapp.com",
  projectId: "email-password-auth-20e85",
  storageBucket: "email-password-auth-20e85.firebasestorage.app",
  messagingSenderId: "837924002263",
  appId: "1:837924002263:web:e5f2e988d6de0f12a5d392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);