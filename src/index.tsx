import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

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
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);