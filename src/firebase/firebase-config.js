import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKjsJuSDp0EPZXi-Vyvm_zf0ZFpEAA1T0",
    authDomain: "react-app-cursos-c50f0.firebaseapp.com",
    databaseURL: "https://react-app-cursos-c50f0.firebaseio.com",
    projectId: "react-app-cursos-c50f0",
    storageBucket: "react-app-cursos-c50f0.appspot.com",
    messagingSenderId: "723323869284",
    appId: "1:723323869284:web:cac08619c49b0076b7e771"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}