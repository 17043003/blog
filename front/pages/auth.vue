<template>
  <div>
    <button @click="signin()">ログイン</button>
    <button @click="signout()">ログアウト</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  methods: {
    signin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$store.dispatch(
            'auth/setTokenAction',
            result.credential.accessToken
          )
          alert(`ログインしました`)
        })
        .catch((error) => {
          // Handle Errors here.
          alert(error)
        })
    },
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('auth/setTokenAction', '')
          alert('signout succeeded')
        })
        .catch((error) => {
          this.signoutError = error
          alert(error)
        })
    },
  },
}
</script>
