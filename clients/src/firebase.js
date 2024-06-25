// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "garaadkabe.firebaseapp.com",
  projectId: "garaadkabe",
  storageBucket: "garaadkabe.appspot.com",
  messagingSenderId: "104778529547",
  appId: "1:104778529547:web:56fc8278fc9812549b800e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);