import firebase from 'firebase'


// Replace with your firebase config
const config = {
  apiKey: "AIzaSyDIRb3pxJh-6jBftbe2A_9SQc14pKnRwYY",
  authDomain: "bucket-96863.firebaseapp.com",
  databaseURL: "https://bucket-96863.firebaseio.com",
  projectId: "bucket-96863",
  storageBucket: "bucket-96863.appspot.com",
  messagingSenderId: "756829510717",
  appId: "1:756829510717:web:882cf06138d38a78b15e54",
  measurementId: "G-JYRF2YRFSW"
};
firebase.initializeApp(config)
export default firebase
