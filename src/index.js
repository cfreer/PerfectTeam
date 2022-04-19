import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6xLq9hDh2hDiAplRrwl_Ro4s6ySOQGs",
  authDomain: "perfect-team-75839.firebaseapp.com",
  projectId: "perfect-team-75839",
  storageBucket: "perfect-team-75839.appspot.com",
  messagingSenderId: "496641240932",
  appId: "1:496641240932:web:6e43a4635544aa291bd471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
