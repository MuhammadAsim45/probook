


import firebase from 'firebase'
//import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDlCzWWxK7iTNfqFkpFXiklF2DKsvCboYQ",
  authDomain: "probookpro247.firebaseapp.com",
  databaseURL: "https://probookpro247-default-rtdb.firebaseio.com",
  projectId: "probookpro247",
  storageBucket: "probookpro247.appspot.com",
  messagingSenderId: "740376392292",
  appId: "1:740376392292:web:91288ea1d0bc5d9c7ce571"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth()
export default firebase
