// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt-KQvqcu6_Nn5KnrOkii-d_6b0uZ-Sl0",
    authDomain: "e-commerce-app-5dbe9.firebaseapp.com",
    projectId: "e-commerce-app-5dbe9",
    storageBucket: "e-commerce-app-5dbe9.appspot.com",
    messagingSenderId: "722715635896",
    appId: "1:722715635896:web:b6734ed5201ffe19ee444d",
    measurementId: "G-5YR7RN0RY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;