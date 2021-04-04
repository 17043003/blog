import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBhrBiqZzHJ5JP9IpJ7c9wmUMZGkZLrM_s',
  authDomain: 'myblog-f0a4b.firebaseapp.com',
  projectId: 'myblog-f0a4b',
  storageBucket: 'myblog-f0a4b.appspot.com',
  messagingSenderId: '218438676844',
  appId: '1:218438676844:web:5efb6fa915ce62489a8349',
  measurementId: 'G-JGZLXBG1M5',
}

// 二重の初期化を防ぐ
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// 他のファイルから使用できるようにする
export default firebase
