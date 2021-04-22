<template>
  <div>
    <v-form ref="form">
      <v-text-field v-model="title" filled></v-text-field>

      <v-row>
        <v-col>
          <v-textarea v-model="content" filled auto-grow></v-textarea>
        </v-col>
        <v-col>
          <MarkDown :content="content"></MarkDown>
        </v-col>
      </v-row>
      <v-btn @click="submit()">投稿</v-btn>
    </v-form>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  layout: 'postEdit',
  middleware: 'authenticated',
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    submit() {
      this.addPost()

      return true
    },
    addPost() {
      const db = firebase.firestore()
      const postsRef = db.collection('posts')

      postsRef
        .add({
          title: this.title,
          content: this.content,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((result) => {
          this.$router.push(`/posts`)
          alert(`${result.id}を追加`)
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
}
</script>
