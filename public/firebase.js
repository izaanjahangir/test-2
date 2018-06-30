

// Initialize Firebase
var config = {
    apiKey: "AIzaSyADUa_DcbdrQdgaPtM4yOQFfCCDbzBDe3g",
    authDomain: "izaan-practice.firebaseapp.com",
    databaseURL: "https://izaan-practice.firebaseio.com",
    projectId: "izaan-practice",
    storageBucket: "izaan-practice.appspot.com",
    messagingSenderId: "79571580353"
  };
  firebase.initializeApp(config);

const storageRef = firebase.storage().ref();
const db = firebase.firestore();

