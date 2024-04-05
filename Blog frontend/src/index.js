import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Ccomponents from './Ccomponents';
// import Validation from './Validation';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwBi1GDb67sDbHuXpwSqlMQfu4drxvE8I",
  authDomain: "my-react-blog-545f3.firebaseapp.com",
  projectId: "my-react-blog-545f3",
  storageBucket: "my-react-blog-545f3.appspot.com",
  messagingSenderId: "293358181932",
  appId: "1:293358181932:web:0cf0ee9db2a3fe0fe8bb89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Ccomponents/> */}
    {/* <Validation /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
