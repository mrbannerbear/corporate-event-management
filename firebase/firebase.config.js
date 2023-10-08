// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrcw_qMnnaO0eLHYQ-sNg_Vazv1KH3lE4",
  authDomain: "corporate-event-manageme-2db77.firebaseapp.com",
  projectId: "corporate-event-manageme-2db77",
  storageBucket: "corporate-event-manageme-2db77.appspot.com",
  messagingSenderId: "1028220508151",
  appId: "1:1028220508151:web:636d05c8a27e0b532d40f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)