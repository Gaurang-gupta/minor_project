// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC61aimapm4HRO4jZi2DQeFDKk92438oJI",
  authDomain: "nitj-swp.firebaseapp.com",
  projectId: "nitj-swp",
  storageBucket: "nitj-swp.appspot.com",
  messagingSenderId: "63660216316",
  appId: "1:63660216316:web:86ae0f0ee4ff4075e1ac79",
  measurementId: "G-X3F4TVPPH1"
};

let fileNames = [];
async function list(folder) {
  const storageRef = firebase.storage().ref();
  let listRef = storageRef.child(folder);
  await listRef
    .listAll()
    .then(async (res) => {
      fileNames = [...res.items];
    }).catch((error) => {
      console.log(error);
    });
  // [END storage_list_all]
  return fileNames;
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export { list };
export default storage
