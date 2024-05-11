// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myhostel-337bc.firebaseapp.com",
  projectId: "myhostel-337bc",
  storageBucket: "myhostel-337bc.appspot.com",
  messagingSenderId: "1054955170926",
  appId: "1:1054955170926:web:9d9595afc8393a86108a7f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
