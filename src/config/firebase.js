import  firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

  var firebaseConfig = {
    apiKey: "AIzaSyD85Ui57TF2pugnDkEyLBhulf_VU2yQnv0",
    authDomain: "olx-copy-react.firebaseapp.com",
    databaseURL: "https://olx-copy-react.firebaseio.com",
    projectId: "olx-copy-react",
    storageBucket: "olx-copy-react.appspot.com",
    messagingSenderId: "677957469728",
    appId: "1:677957469728:web:d7a2eb34d10a0e7050de45",
    measurementId: "G-45BEEN85L6"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;