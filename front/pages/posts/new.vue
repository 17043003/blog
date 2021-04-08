<template>
  <div>
    <v-form ref="form">
      <v-text-field v-model="title"></v-text-field>
      <v-text-field v-model="content"></v-text-field>

      <v-btn @click="submit()">投稿</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    submit() {
      return true
    },
  },
}
</script>
