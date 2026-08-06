<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDhpaHPLD1mSFiaoCMfI8Ui0Tm77tqtj-4",
    authDomain: "vk-fashion-store-7995a.firebaseapp.com",
    projectId: "vk-fashion-store-7995a",
    storageBucket: "vk-fashion-store-7995a.firebasestorage.app",
    messagingSenderId: "775919353491",
    appId: "1:775919353491:web:68b181b31242c21c845766",
    measurementId: "G-GV8H5ZPZ25"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
