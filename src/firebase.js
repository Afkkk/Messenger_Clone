import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    
        apiKey: "AIzaSyANl-og5E7tpxjfJqK4ShG__-1beaK3tNA",
        authDomain: "messenger-copy-by-affk.firebaseapp.com",
        databaseURL: "https://messenger-copy-by-affk.firebaseio.com",
        projectId: "messenger-copy-by-affk",
        storageBucket: "messenger-copy-by-affk.appspot.com",
        messagingSenderId: "343645580494",
        appId: "1:343645580494:web:9c0434706ff4c523b6349f",
        measurementId: "G-4D5LKY4Y9X"
      

}) ;

const db = firebaseApp.firestore();

export default db ;