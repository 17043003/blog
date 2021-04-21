<template>
  <div>
    <h3>{{ createdDate }}</h3>
    <h1>{{ post.title }}</h1>
    <div class="content markdown-body" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
import 'github-markdown-css'

export default {
  data() {
    return {
      post: {},
    }
  },
  computed: {
    createdDate() {
      return this.$moment
        .unix(this.post.created_at.seconds)
        .format('YYYY年MM月DD日 h:mm:ss')
    },
    compiledMarkdown() {
      return marked(this.post.content, { sanitize: true })
    },
  },
  created() {
    this.post = this.$store.getters['posts/getPostById'](this.$route.params.id)
  },
}
</script>

<style lang="scss">
.content {
  white-space: pre-wrap;
}
</style>
