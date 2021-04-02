import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'

const config = {
  projectId: this.$config.firebaseProjectId,
  apiKey: this.$config.firebaseApiKey,
  authDomain: this.$config.firebaseAuthDomain,
  storageBucket: this.$config.firebaseStorageBucket,
  messagingSenderId: this.$config.firebaseMessagingSenderId,
  appId: this.$config.firebaseAppId,
  measurementId: this.$config.firebaseMeasurementId,
}

// 二重の初期化を防ぐ
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// 他のファイルから使用できるようにする
export default firebase
