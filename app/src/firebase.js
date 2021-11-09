import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyA1HarRHJiz_kQZIwPZmDK_4UX5e6ZX_N0",
    authDomain: "sprint4project.firebaseapp.com",
    projectId: "sprint4project",
    storageBucket: "sprint4project.appspot.com",
    messagingSenderId: "35530005048",
    appId: "1:35530005048:web:c6719200a38818d9f4e4cd"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
//el modulo de autenticación
export const auth = firebase.auth();
//el proveedor de autenticación
export const provider = new firebase.auth.GoogleAuthProvider();
//la utilidad para hacer login con el pop-up
export const loginConGoogle = () => auth.signInWithPopup(provider);
//la utilidad para hacer logout
export const logout = () => auth.signOut();
// exporta el paquete de firebase para poder usarlo
export default firebase
