<template>
  <div>
    <h3>{{ post.created_at }}</h3>
    <h1>{{ post.title }}</h1>
    <div>{{ post.content }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters['posts/getPostById'](this.$route.params.id)
    },
  },
}
</script>
