// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxjZvI7GSka6Xdg4RUKjfdUpclSvK1a5E",
  authDomain: "e-commerce-4e883.firebaseapp.com",
  projectId: "e-commerce-4e883",
  storageBucket: "e-commerce-4e883.appspot.com",
  messagingSenderId: "922872862062",
  appId: "1:922872862062:web:f925dc6f289e7e63251d7f",
  measurementId: "G-WXSB226BHG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage