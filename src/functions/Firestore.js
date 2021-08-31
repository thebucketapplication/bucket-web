import firebase from 'firebase'


// Replace with your firebase config
const config = {
  apiKey: "AIzaSyC_LiHQ5U50TRkZGnAiMnRxLTIhaiOzo7E",
  authDomain: "shopping-4621a.firebaseapp.com",
  databaseURL: "https://shopping-4621a.firebaseio.com",
  projectId: "shopping-4621a",
  storageBucket: "shopping-4621a.appspot.com",
  messagingSenderId: "40739878103",
  appId: "1:40739878103:web:4628ab8cd622196a182c92",
  measurementId: "G-QQWBDFT1VY"
}
firebase.initializeApp(config)
export default firebase
