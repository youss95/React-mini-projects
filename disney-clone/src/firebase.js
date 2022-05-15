import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCHjv9aY01EBmBFPMvogVqekOHYFhR1IBY",
  authDomain: "disney-clone-8fd1b.firebaseapp.com",
  projectId: "disney-clone-8fd1b",
  storageBucket: "disney-clone-8fd1b.appspot.com",
  messagingSenderId: "1050520468354",
  appId: "1:1050520468354:web:6b8a8f04312e1860f56d9b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
