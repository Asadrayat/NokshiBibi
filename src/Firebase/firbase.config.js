// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_1ERwYvsiIJvAed5GwpMyeJrM0sGinf0",
  authDomain: "nokshi-service.firebaseapp.com",
  projectId: "nokshi-service",
  storageBucket: "nokshi-service.appspot.com",
  messagingSenderId: "966691286095",
  appId: "1:966691286095:web:f9cffa0cdffc7b69884e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;