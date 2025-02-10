import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGVC3XMI8ywNmA1mUDoPFtxh8y4sgYaGg",
  authDomain: "review-platform-4eb62.firebaseapp.com",
  projectId: "review-platform-4eb62",
  storageBucket: "review-platform-4eb62.firebasestorage.app",
  messagingSenderId: "467273240596",
  appId: "1:467273240596:web:1f283b70d122ef9fc35701",
  measurementId: "G-KH32P47RMW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

