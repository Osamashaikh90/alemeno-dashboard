// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAO-kWE5UgiNZX3pqtYN3dzKdpheNZxSYw",
  authDomain: "coursewebsite-a0050.firebaseapp.com",
  projectId: "coursewebsite-a0050",
  storageBucket: "coursewebsite-a0050.appspot.com",
  messagingSenderId: "120609703648",
  appId: "1:120609703648:web:8b9fc69e7d6de92f623285",
  measurementId: "G-V3ZJTJJJH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);