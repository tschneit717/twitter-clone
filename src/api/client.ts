// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxKDhAXuzVJjyWtwP8apThANQhZr9eR8o",
  authDomain: "mock-twitter-59aaf.firebaseapp.com",
  projectId: "mock-twitter-59aaf",
  storageBucket: "mock-twitter-59aaf.appspot.com",
  messagingSenderId: "742088489893",
  appId: "1:742088489893:web:a24e986a2c156821b4c64c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }