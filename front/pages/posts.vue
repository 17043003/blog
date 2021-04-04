<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <v-card class="post-card" append nuxt :to="post.id" elevation="2">
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text>{{ post.content }}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss"></style>
