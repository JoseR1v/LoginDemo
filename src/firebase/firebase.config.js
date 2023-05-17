import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9NUTGFsTyvJhQVHTEfHIiMkCUBqkt4Ns",
  authDomain: "login-demo-4c3a7.firebaseapp.com",
  projectId: "login-demo-4c3a7",
  storageBucket: "login-demo-4c3a7.appspot.com",
  messagingSenderId: "27627114305",
  appId: "1:27627114305:web:ee8f5c643e280dd8371bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)