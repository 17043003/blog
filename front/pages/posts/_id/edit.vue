<template>
  <div>
    <h1>編集</h1>
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
import { updatePost } from '~/plugins/post'

export default {
  data() {
    return {
      post: {},
      postId: null,
      title: '',
      content: '',
    }
  },
  created() {
    this.postId = this.$route.params.id
    Object.assign(
      this.post,
      this.$store.getters['posts/getPostById'](this.postId)
    )
    this.title = this.post.title
    this.content = this.post.content
  },
  methods: {
    submit() {
      this.post.title = this.title
      this.post.content = this.content

      updatePost(this.postId, this.post)
      this.$router.push(`/posts`)
    },
  },
}
</script>
