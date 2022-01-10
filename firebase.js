// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC61aimapm4HRO4jZi2DQeFDKk92438oJI",
    authDomain: "nitj-swp.firebaseapp.com",
    projectId: "nitj-swp",
    storageBucket: "nitj-swp.appspot.com",
    messagingSenderId: "63660216316",
    appId: "1:63660216316:web:86ae0f0ee4ff4075e1ac79",
    measurementId: "G-X3F4TVPPH1"
  };

const firebase_app= firebase.initializeApp (firebaseConfig)
const storage = firebase.storage ()
export default storage
