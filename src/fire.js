import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAe1WYOQxbJogvBCO_t3e41wMzadt7wNao",
    authDomain: "react-firebase-boilerpla-33b85.firebaseapp.com",
    databaseURL: "https://react-firebase-boilerpla-33b85.firebaseio.com",
    projectId: "react-firebase-boilerpla-33b85",
    storageBucket: "react-firebase-boilerpla-33b85.appspot.com",
    messagingSenderId: "542045566766"
  };
  
const fire = firebase.initializeApp(config);

export default fire;