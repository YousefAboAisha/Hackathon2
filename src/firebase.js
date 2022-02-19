// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpGDSDGj2cuWcMhLUO_OclG_tJLVnT5sg",
  authDomain: "hackathon2-242f0.firebaseapp.com",
  databaseURL: "https://hackathon2-242f0-default-rtdb.firebaseio.com",
  projectId: "hackathon2-242f0",
  storageBucket: "hackathon2-242f0.appspot.com",
  messagingSenderId: "1021396297986",
  appId: "1:1021396297986:web:916fb2bfd5d8f4601f7a1b",
  measurementId: "G-7BPBYN67HX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
