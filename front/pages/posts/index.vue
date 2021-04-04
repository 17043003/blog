<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <v-card class="post-card" append nuxt :to="post.id" elevation="2">
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text>{{ post.content | omittedText }}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    omittedText(text) {
      return text.length > 20 ? text.slice(0, 20) + '...' : text
    },
  },
  computed: {
    posts() {
      return this.$store.getters['posts/posts']
    },
  },
  created() {
    this.$store.dispatch('posts/init')
  },
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: 20px;
}
</style>
