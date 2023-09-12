// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwiM3WmjI8nK6Pqpou-C3EuV7wSY5gNDg',
  authDomain: 'react-disney-plus-app-106b8.firebaseapp.com',
  projectId: 'react-disney-plus-app-106b8',
  storageBucket: 'react-disney-plus-app-106b8.appspot.com',
  messagingSenderId: '748454341553',
  appId: '1:748454341553:web:57d3ccb33e0b130796ab90'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
