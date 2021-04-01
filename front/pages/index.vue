<template>
  <div>
    <div v-for="post in posts" :key="post">
      <h1>{{ post.title }}</h1>
      <h2>{{ post.content }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ $axios }) {
    return await $axios
      .get('/projects/myblog-f0a4b/databases/(default)/documents/posts')
      .then((response) => {
        return { posts: response.data.fields }
      })
  },
}
</script>
