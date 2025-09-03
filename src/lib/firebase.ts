// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore }from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "bsa-connect",
  "appId": "1:514537342227:web:b1b29e1f965d01c18b86e6",
  "storageBucket": "bsa-connect.firebasestorage.app",
  "apiKey": "AIzaSyBTgq7zkelkxjIliRKZ9ShMeDKTpBuRV-8",
  "authDomain": "bsa-connect.firebaseapp.com",
  "messagingSenderId": "514537342227"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
