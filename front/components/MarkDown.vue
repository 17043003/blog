<template>
  <div class="content markdown-body" v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked'
import 'github-markdown-css'
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content, { sanitize: true })
    },
  },
}
</script>

<style lang="scss">
.content {
  white-space: pre-wrap;
}
</style>
