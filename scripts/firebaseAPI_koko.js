//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAVq6TarhddZBudF-URLBuaRbSGgJQClvw",
  authDomain: "comp1800-demo-2464b.firebaseapp.com",
  projectId: "comp1800-demo-2464b",
  storageBucket: "comp1800-demo-2464b.firebasestorage.app",
  messagingSenderId: "189710986568",
  appId: "1:189710986568:web:214b20a682e7313483577d"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

