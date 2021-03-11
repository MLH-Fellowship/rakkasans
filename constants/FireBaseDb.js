import * as Firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC8Mz4w87exnxBdXef5n5twD_Mc1_NrHPo',
  authDomain: 'rakassans-app.firebaseapp.com',
  databaseURL: 'https://rakassans-app.firebaseio.com',
  projectId: 'rakassans-app',
  storageBucket: 'rakassans-app.appspot.com',
  messagingSenderId: '123767197649',
  appId: '1:123767197649:web:bdb6b2224c951fcd42daf0',
  measurementId: 'G-3WQYQ9RW3F',
};

Firebase.initializeApp(firebaseConfig);
export default Firebase;
