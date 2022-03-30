import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Taking the config file from Firebas>> Project Setting >>
const config = {
    apiKey: "AIzaSyDuzw9sQQbMH8iazuS126Wn1tNqC6P9Cqc",
    authDomain: "chat-web-app-6819b.firebaseapp.com",
    databaseURL: "https://chat-web-app-6819b-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-6819b",
    storageBucket: "chat-web-app-6819b.appspot.com",
    messagingSenderId: "848740335813",
    appId: "1:848740335813:web:316f06549dd42b491330ac"
  };

// using this app varible we can use any serices of firebase
const app = firebase.initializeApp(config);

// exporting auth object to intereact with firebase.
// It will give auth object to intereact with database
export const auth = app.auth();

// exporting database to use 
export const database = app.database();

