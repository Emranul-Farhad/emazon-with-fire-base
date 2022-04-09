// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCa8S1p3qm2UCPwVhryUvx9R68_zzEiVjI",
    authDomain: "emazon-authentication.firebaseapp.com",
    projectId: "emazon-authentication",
    storageBucket: "emazon-authentication.appspot.com",
    messagingSenderId: "143593206555",
    appId: "1:143593206555:web:8ddb9e3bad22acff2019be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }