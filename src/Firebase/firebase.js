import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoKHXiehyrHaP5aQolloHzUJSnOvsj5lI",
  authDomain: "hablu-learning.firebaseapp.com",
  projectId: "hablu-learning",
  storageBucket: "hablu-learning.appspot.com",
  messagingSenderId: "1072965839346",
  appId: "1:1072965839346:web:282fa5f4be91d16b68636b",
};

const app = initializeApp(firebaseConfig);
export default app;
