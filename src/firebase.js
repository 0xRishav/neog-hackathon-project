import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2kfaC9p9SBy6Kk26ArXIUSx1NTEMTODU",
    authDomain: "socialhouse-ab73a.firebaseapp.com",
    projectId: "socialhouse-ab73a",
    storageBucket: "socialhouse-ab73a.appspot.com",
    messagingSenderId: "59154115979",
    appId: "1:59154115979:web:eea072366bbb086a05d38e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { auth, provider, db, storage, firebaseApp };