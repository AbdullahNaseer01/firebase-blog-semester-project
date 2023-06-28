import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDDsc9pDRD5qKcxQBCN4OP91ZxB4Sgg0lI",
  authDomain: "react-blog-app-26766.firebaseapp.com",
  projectId: "react-blog-app-26766",
  storageBucket: "react-blog-app-26766.appspot.com",
  messagingSenderId: "1094525529704",
  appId: "1:1094525529704:web:02c81fd4d9ae83a38815dd",
  measurementId: "G-J55C8269X6",
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export{auth, db, storage}