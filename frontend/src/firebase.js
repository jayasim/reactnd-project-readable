import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyACFrKJ65NNmFWQZZwGms12WMSWiqRs2EY',
  authDomain: 'readableapp-67f4c.firebaseapp.com',
  databaseURL: 'https://readableapp-67f4c.firebaseio.com',
  projectId: 'readableapp-67f4c',
  storageBucket: 'readableapp-67f4c.appspot.com',
  messagingSenderId: '157796245288'
}

firebase.initializeApp(config)
export default firebase
