// import firebase from "./firebase";
// import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqU5iJbtkao1wjhVg_cYvrxSvtmX6Ltxc",
  authDomain: "whatsapp-clone-e0604.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e0604.firebaseio.com",
  projectId: "whatsapp-clone-e0604",
  storageBucket: "whatsapp-clone-e0604.appspot.com",
  messagingSenderId: "101397706095",
  appId: "1:101397706095:web:eccc9d77cad0511fca649a",
  measurementId: "G-XBN2LD3WKH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
