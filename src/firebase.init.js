// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZyXt1LNT1-LF5yfzSt68r5ltHnRO_h6E",
  authDomain: "gym-center-a7aa2.firebaseapp.com",
  projectId: "gym-center-a7aa2",
  storageBucket: "gym-center-a7aa2.appspot.com",
  messagingSenderId: "582106572571",
  appId: "1:582106572571:web:c46b335ad79328817fd5be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
