// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4861udTfCo2r5Y1iAWFcU6vDCuCF8xgk",
  authDomain: "authencation-app-cf87e.firebaseapp.com",
  databaseURL: "https://authencation-app-cf87e-default-rtdb.firebaseio.com",
  projectId: "authencation-app-cf87e",
  storageBucket: "authencation-app-cf87e.appspot.com",
  messagingSenderId: "736590226914",
  appId: "1:736590226914:web:c63f5692424b8dbc3005bb",
  measurementId: "G-F55TQZ4KN0"
};
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const switchToSignUp = document.getElementById('signUp-switch');
const switchToSignIn = document.getElementById('signIn-switch');
const registerDiv = document.querySelector('.register-div');
const loginDiv = document.querySelector('.login-div');

loginDiv.style.display = 'none';

switchToSignIn.addEventListener('click' , ()=>{
  registerDiv.style.display = 'none';
  loginDiv.style.display = 'flex'
  // registerDiv.style.opacity = '0';
  // loginDiv.style.opacity = '1';
  // registerDiv.remove()


  

})
switchToSignUp.addEventListener('click' , ()=>{
  loginDiv.style.display = 'none';
  registerDiv.style.display = 'flex'

  // registerDiv.style.opacity = '1';
  // loginDiv.style.opacity = '0';

  // loginDiv.remove()
  
})
console.log('Register Form  ' , registerForm);

registerForm.addEventListener('submit' , e =>{
  
  e.preventDefault()
  console.log(e)
  const userInfo = {
    fullname: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value
  }

  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('User Registered')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('User Already Registered')

    // ..
  });
})

loginForm.addEventListener('submit' , e =>{
  e.preventDefault()
  console.log(e)
  const userInfo = {
    email: e.target[0].value,
    password: e.target[1].value
  }
  signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('User Logged in')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('User Already Logged in')

  });

})