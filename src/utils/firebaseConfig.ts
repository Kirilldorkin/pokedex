import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj9lOnupSHhnc4PpeK49m_vaPQM93qUBE",
  authDomain: "pokedex-8aad7.firebaseapp.com",
  projectId: "pokedex-8aad7",
  storageBucket: "pokedex-8aad7.appspot.com",
  messagingSenderId: "296468909622",
  appId: "1:296468909622:web:88de02418b652aa2439297",
  measurementId: "G-BDVHN4MTVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
