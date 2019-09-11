import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCzMXm4-rSxT8PR-KHXTwBYbdTPBj0D-nU",
  authDomain: "crwn-db-1de54.firebaseapp.com",
  databaseURL: "https://crwn-db-1de54.firebaseio.com",
  projectId: "crwn-db-1de54",
  storageBucket: "",
  messagingSenderId: "696912189891",
  appId: "1:696912189891:web:9b74d23ade91447f044576"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
