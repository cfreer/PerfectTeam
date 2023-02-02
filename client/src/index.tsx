/**
 * This file contains the Firebase configuration and returns
 * the render of the React element in the DOM.
 */

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6xLq9hDh2hDiAplRrwl_Ro4s6ySOQGs",
  authDomain: "perfect-team-web.firebaseapp.com",
  projectId: "perfect-team-web",
  storageBucket: "perfect-team-web.appspot.com",
  messagingSenderId: "496641240932",
  appId: "1:496641240932:web:6e43a4635544aa291bd471"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);