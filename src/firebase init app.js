// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDw_LldiyuWgn_lXYeVtIO14VILVx93jyE",
  authDomain: "the-dragon-news-b01c6.firebaseapp.com",
  projectId: "the-dragon-news-b01c6",
  storageBucket: "the-dragon-news-b01c6.appspot.com",
  messagingSenderId: "1049963118406",
  appId: "1:1049963118406:web:42a98525d5792bb1652f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;