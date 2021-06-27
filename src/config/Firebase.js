import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDFBcAQ5yKAfFhaOSy_JQqkj2zjQw8fHD8",
    authDomain: "covid-19-tracker-b3be1.firebaseapp.com",
    databaseURL: "https://covid-19-tracker-b3be1-default-rtdb.firebaseio.com",
    projectId: "covid-19-tracker-b3be1",
    storageBucket: "covid-19-tracker-b3be1.appspot.com",
    messagingSenderId: "1056224906463",
    appId: "1:1056224906463:web:1a13bfd14ff6c9b9412d6a",
    measurementId: "G-M6YXXFVBFX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;