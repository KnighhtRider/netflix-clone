// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBxm_qDeRM2wNAoi-4JPp4djlDobSkmcOw",
  authDomain: "netflix-clone-c1a96.firebaseapp.com",
  projectId: "netflix-clone-c1a96",
  storageBucket: "netflix-clone-c1a96.appspot.com",
  messagingSenderId: "260719947933",
  appId: "1:260719947933:web:33cf6046988ff049826474",
  measurementId: "G-TR4KE4GYMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);