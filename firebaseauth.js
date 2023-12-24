// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6IW1Amsc8VYIAzZDbTZwTTesy20CRI6g",
  authDomain: "zaeniahmad-id.firebaseapp.com",
  projectId: "zaeniahmad-id",
  storageBucket: "zaeniahmad-id.appspot.com",
  messagingSenderId: "462943962420",
  appId: "1:462943962420:web:517b0cdfbf8a09f7739161",
  measurementId: "G-866K70KBNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);