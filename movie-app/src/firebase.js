// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAbMTLLhb7mzFtoDCtDa5V8xtfgqdvW0F8", 
  projectId: "alx-login",
  storageBucket: "alx-login.firebasestorage.app",
  messagingSenderId: "57026164521",
  appId: "1:57026164521:web:94e1101900cea62f02e938",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
