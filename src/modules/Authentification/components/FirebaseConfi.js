import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfi = {
    apiKey: "AIzaSyBu9sPX2E7vFxcYrzRByC-UhqD3TwLEAXY",
    authDomain: "testfirebase-5ea6a.firebaseapp.com",
    projectId: "testfirebase-5ea6a",
    storageBucket: "testfirebase-5ea6a.appspot.com",
    messagingSenderId: "1079347390757",
    appId: "1:1079347390757:web:2da7c35b25473630f4d2cc",
    measurementId: "G-G2B5JNMJKB"
};

firebase.initializeApp(firebaseConfi);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {auth, provider };
