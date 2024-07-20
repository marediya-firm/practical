// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // If you are using Firestore
import 'firebase/compat/firestore'; // If you are using Realtime Database
import 'firebase/compat/storage';  // <----

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn-1F2y56NQDKRr-mhwh0Woiy_Z68UghI",
    authDomain: "game-7a7bf.firebaseapp.com",
    projectId: "game-7a7bf",
    storageBucket: "game-7a7bf.appspot.com",
    messagingSenderId: "184693223371",
    appId: "1:184693223371:web:f5330f29ffbbcc0004104e",
    measurementId: "G-N6GQP6VFTS"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// const storage = firebase.storage()
// console.log("storage", storage);

export { firebase };
