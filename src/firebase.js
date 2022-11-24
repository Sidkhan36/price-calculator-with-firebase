import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJEsSIWxcxB6A9OxB084evEr1JpOMN6hs",
  authDomain: "auth-production-f886a.firebaseapp.com",
  projectId: "auth-production-f886a",
  storageBucket: "auth-production-f886a.appspot.com",
  messagingSenderId: "1088704701989",
  appId: "1:1088704701989:web:6abd08695886d0df3541cc"
})

export const auth = app.auth()
export default app


