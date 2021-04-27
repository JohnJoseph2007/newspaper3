import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCYtsZ4EP3ktA2hju8ztwXAcjrnoprJaxQ",
  authDomain: "newspaper-9ead8.firebaseapp.com",
  databaseURL: "https://newspaper-9ead8-default-rtdb.firebaseio.com",
  projectId: "newspaper-9ead8",
  storageBucket: "newspaper-9ead8.appspot.com",
  messagingSenderId: "304202108187",
  appId: "1:304202108187:web:ab99509bced21da0d297be"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();