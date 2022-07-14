import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCha6SI5TmPuCHM7LYZuqijbytah5ISdVI",
  authDomain: "booking-ebcff.firebaseapp.com",
  projectId: "booking-ebcff",
  storageBucket: "booking-ebcff.appspot.com",
  messagingSenderId: "5881684261",
  appId: "1:5881684261:web:8bec690fac0cacf359bacc",
  measurementId: "G-G4BKVV702Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
const db = getFirestore(app);
 const auth  = getAuth(app);
 const storage = getStorage(app);
export {db,auth,storage}