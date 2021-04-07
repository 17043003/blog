<template>
  <div>
    {{ errorMessage }}
    {{ errorCode }}
    <button @click="auth()">ログイン</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  methods: {
    data() {
      return {
        user: null,
        token: null,
        errorMessage: '',
        errorCode: '',
      }
    },
    auth() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const credential = result.credential

          const token = credential.accessToken
          const user = result.user

          this.token = token
          this.user = user
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message

          this.errorCode = errorCode
          this.errorMessage = errorMessage
        })
    },
  },
}
</script>
