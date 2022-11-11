// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAGIuI1DSUPQbCp-fHcpGOswXMgesrnmmc",
    authDomain: "v-chat-app-7f499.firebaseapp.com",
    projectId: "v-chat-app-7f499",
    storageBucket: "v-chat-app-7f499.appspot.com",
    messagingSenderId: "692424367225",
    appId: "1:692424367225:web:067df0b16be59c321308a8",
    measurementId: "G-FXSVS8GCCC"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;