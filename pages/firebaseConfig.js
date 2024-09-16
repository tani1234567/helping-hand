import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1NjZFp99RYOFyxQ8l_7w3T-0glWridhg",
  authDomain: "fir-log-f5a76.firebaseapp.com",
  projectId: "fir-log-f5a76",
  storageBucket: "fir-log-f5a76.appspot.com",
  messagingSenderId: "193103096335",
  appId: "1:193103096335:web:adf47a21e4a4c8a76f517a",
  measurementId: "G-1YRKNB3Q4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);