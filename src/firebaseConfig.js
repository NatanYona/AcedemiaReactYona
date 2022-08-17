// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnCxbClQ4-iY3YnzVcbSXCr9cxbSLtsrI",
    authDomain: "academia-95b74.firebaseapp.com",
    projectId: "academia-95b74",
    storageBucket: "academia-95b74.appspot.com",
    messagingSenderId: "399180408256",
    appId: "1:399180408256:web:e1bb86dcff0e9ceef01425"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;