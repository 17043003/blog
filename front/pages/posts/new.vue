<template>
  <div>
    <v-form ref="form">
      <v-text-field v-model="title" filled></v-text-field>

      <v-textarea v-model="content" filled auto-grow></v-textarea>
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
