import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCYWe990en32yqPZM7dwaMl0-2f3nRP3EM",
  authDomain: "mocha-smoothies-vue.firebaseapp.com",
  databaseURL: "https://mocha-smoothies-vue.firebaseio.com",
  projectId: "mocha-smoothies-vue",
  storageBucket: "mocha-smoothies-vue.appspot.com",
  messagingSenderId: "249422317085",
  appId: "1:249422317085:web:40f1b87dd15daafeb868f4",
  measurementId: "G-BBCCV5E9PW"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.analytics();

export default firebaseApp.firestore()
