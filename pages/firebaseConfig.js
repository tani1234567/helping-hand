import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA1NjZFp99RYOFyxQ8l_7w3T-0glWridhg",
  authDomain: "fir-log-f5a76.firebaseapp.com",
  projectId: "fir-log-f5a76",
  storageBucket: "fir-log-f5a76.appspot.com",
  messagingSenderId: "193103096335",
  appId: "1:193103096335:web:adf47a21e4a4c8a76f517a",
  measurementId: "G-1YRKNB3Q4C"
};
// optional 
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {firebase };
