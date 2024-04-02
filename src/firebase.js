import { initializeApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore()
const storage = getStorage()
const auth = getAuth();

export { app, db, storage, auth, createUserWithEmailAndPassword, updateProfile, getAuth }