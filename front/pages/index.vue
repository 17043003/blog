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
      .get('posts')
      .then((response) => {
        return { posts: response.data.fields }
      })
      .catch((error) => {
        return { error: error.response }
      })
  },
}
</script>
