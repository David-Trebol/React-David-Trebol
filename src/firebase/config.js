import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTLy_0gHIYJ_mwTceKB_1J9leoP3qT9UM",
  authDomain: "coder-react-ab018.firebaseapp.com",
  projectId: "coder-react-ab018",
  storageBucket: "coder-react-ab018.firebasestorage.app",
  messagingSenderId: "120597118401",
  appId: "1:120597118401:web:a5fb8eaeddbf36808a0340",
  measurementId: "G-8HHRG3WCXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 