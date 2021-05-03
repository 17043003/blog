<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="(link, key) in loggedInLinks" :key="link" nuxt :to="link">
          {{ key }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="10">
            <v-sheet min-height="70vh" rounded="lg">
              <Nuxt class="main-content" />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: {
      top: '/',
      posts: '/posts',
      profile: '/profile',
      updates: '/updates',
    },
  }),
  computed: {
    loggedInLinks() {
      if (this.$store.getters['auth/token']) {
        return {
          ...this.links,
          new: '/posts/new',
        }
      } else {
        return this.links
      }
    },
  },
}
</script>

<style lang="scss">
.v-sheet {
  padding: 10px;
}
</style>
