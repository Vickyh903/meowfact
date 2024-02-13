import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhMa9HI_KdnWcxHSKPo581pmM35Rd38fQ",
  authDomain: "react-contact-form-87f15.firebaseapp.com",
  projectId: "react-contact-form-87f15",
  storageBucket: "react-contact-form-87f15.appspot.com",
  messagingSenderId: "583004668636",
  appId: "1:583004668636:web:45f43da73dd780dd0aea19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);


