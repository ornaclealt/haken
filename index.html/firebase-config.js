// Import fungsi yang dibutuhkan dari Firebase SDK v9+
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Konfigurasi Project Anda
const firebaseConfig = {
  apiKey: "AIzaSyApD7dueaFuPv9hHGajcwo17LADEVriqRw",
  authDomain: "entry-6a64d.firebaseapp.com",
  databaseURL: "https://entry-6a64d-default-rtdb.firebaseio.com",
  projectId: "entry-6a64d",
  storageBucket: "entry-6a64d.firebasestorage.app",
  messagingSenderId: "939693440034",
  appId: "1:939693440034:web:ecd3d0366acf207add1e7b",
  measurementId: "G-RPTFXQK08B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export fungsi biar bisa dipakai di file HTML lain
export { db, auth, provider, ref, set, push, onValue, remove, update, get, signInWithPopup, signOut, onAuthStateChanged };
