import { initializeApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAhnPAYqzh32Y_QCIKdegq7WDoeqUGyxnU",
  authDomain: "vicare-30b38.firebaseapp.com",
  databaseURL: "https://vicare-30b38-default-rtdb.firebaseio.com",
  projectId: "vicare-30b38",
  storageBucket: "vicare-30b38.appspot.com",
  messagingSenderId: "122983331070",
  appId: "1:122983331070:web:9f48aea008e503393021af"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore()
const storage = getStorage()
const auth = getAuth();

export { app, db, storage, auth, createUserWithEmailAndPassword, updateProfile, getAuth }