import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaNoMTSeW_rC4-QdbO0iKTgM5H_NXkyPY",
  authDomain: "landing-ecommerce-14eeb.firebaseapp.com",
  projectId: "landing-ecommerce-14eeb",
  storageBucket: "landing-ecommerce-14eeb.firebasestorage.app",
  messagingSenderId: "109694226411",
  appId: "1:109694226411:web:39f9cca4c6929f3d2e53ae"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)