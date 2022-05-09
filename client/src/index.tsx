import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD:src/index.js
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import SearchBar from './Components/SearchBar';
import Data from './Data.json'
=======
import firebase from 'firebase';
import { BrowserRouter } from "react-router-dom";
>>>>>>> 828fd9e85152599ce4975f298261ce6b3362bac6:src/index.tsx

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
  <BrowserRouter>
    <App />
<<<<<<< HEAD:src/index.js
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <SearchBar data={}></SearchBar>
  </React.StrictMode>
)
=======
  </BrowserRouter>,
  document.getElementById('root')
);
>>>>>>> 828fd9e85152599ce4975f298261ce6b3362bac6:src/index.tsx
