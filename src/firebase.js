import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAWhnjCEEjWmgnD5hZhYRBr-dmfk_Oiocg",
  authDomain: "register-c0dfb.firebaseapp.com",
  projectId: "register-c0dfb",
  storageBucket: "register-c0dfb.appspot.com",
  messagingSenderId: "193619897310",
  appId: "1:193619897310:web:893adaaa88719267f4cb4f",
  measurementId: "G-NQ63Q5HW77"
});

const auth = app.auth();
export {auth};
export default app;