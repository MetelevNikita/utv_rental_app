
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDH34NrEjbxzLMimhGIr4bRv7wmVaK0jFQ",
  authDomain: "utv-todo.firebaseapp.com",
  databaseURL: "https://utv-todo-default-rtdb.firebaseio.com",
  projectId: "utv-todo",
  storageBucket: "utv-todo.appspot.com",
  messagingSenderId: "799793721456",
  appId: "1:799793721456:web:4e1ec64da0a9c6e35804b5"
};


const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})

console.log(db)
export default db