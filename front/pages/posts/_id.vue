<template>
  <div>
    <h3>{{ createdDate }}</h3>
    <h1>{{ post.title }}</h1>
    <MarkDown :content="post.content"></MarkDown>
  </div>
</template>

<script>
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
  },
  created() {
    this.post = this.$store.getters['posts/getPostById'](this.$route.params.id)
  },
}
</script>
