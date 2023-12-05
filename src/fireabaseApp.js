// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH34NrEjbxzLMimhGIr4bRv7wmVaK0jFQ",
  authDomain: "utv-todo.firebaseapp.com",
  databaseURL: "https://utv-todo-default-rtdb.firebaseio.com",
  projectId: "utv-todo",
  storageBucket: "utv-todo.appspot.com",
  messagingSenderId: "799793721456",
  appId: "1:799793721456:web:4e1ec64da0a9c6e35804b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db