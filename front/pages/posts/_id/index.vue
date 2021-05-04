<template>
  <div>
    <h3 class="create-date date">作成日：{{ createdDate }}</h3>
    <h3 class="update-date date">更新日：{{ updatedDate }}</h3>
    <nuxt-link v-if="isLoggedIn" nuxt append to="edit">編集</nuxt-link>
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
    updatedDate() {
      if (this.post.updated_at) {
        return this.$moment
          .unix(this.post.updated_at.seconds)
          .format('YYYY年MM月DD日 h:mm:ss')
      } else {
        return ''
      }
    },
    isLoggedIn() {
      if (this.$store.getters['auth/token']) {
        return true
      } else {
        return false
      }
    },
  },
  created() {
    this.post = this.$store.getters['posts/getPostById'](this.$route.params.id)
  },
}
</script>

<style lang="scss">
.date {
  text-align: right;
}
.content {
  white-space: pre-wrap;
}
</style>
