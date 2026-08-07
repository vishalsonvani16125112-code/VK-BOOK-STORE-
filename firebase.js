import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhpaHPLD1mSFiaoCMfI8Ui0Tm77tqtj-4",
  authDomain: "vk-fashion-store-7995a.firebaseapp.com",
  projectId: "vk-fashion-store-7995a",
  storageBucket: "vk-fashion-store-7995a.firebasestorage.app",
  messagingSenderId: "775919353491",
  appId: "1:775919353491:web:68b181b31242c21c845766",
  measurementId: "G-GV8H5ZPZ25"
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
