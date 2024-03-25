
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCMrL4tgM5zaO9B4EMz7SHT2epRmBrI7dc",
  authDomain: "fire-auth-81eca.firebaseapp.com",
  projectId: "fire-auth-81eca",
  storageBucket: "fire-auth-81eca.appspot.com",
  messagingSenderId: "12886437856",
  appId: "1:12886437856:web:a52977d315dafb74974585",
  measurementId: "G-3S4P1NVEQL"
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

const analytics = getAnalytics(app);
