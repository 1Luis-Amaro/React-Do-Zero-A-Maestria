import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjndfGCDSjJ2CFsfbKjNIRVm-jB5A-ZVA",
  authDomain: "miniblog-5d18e.firebaseapp.com",
  projectId: "miniblog-5d18e",
  storageBucket: "miniblog-5d18e.firebasestorage.app",
  messagingSenderId: "69425450653",
  appId: "1:69425450653:web:b7390f44e600f4f17c0e74"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}