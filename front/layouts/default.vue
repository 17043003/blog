<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-tabs v-if="!isMobile" centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="(link, key) in loggedInLinks" :key="link" nuxt :to="link">
          {{ key }}
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon
        v-else
        @click="isMenuDrawn = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="isMenuDrawn" fixed temporary clipped>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(link, key) in loggedInLinks"
            :key="key"
            :to="link"
          >
            <v-list-item-title>{{ key }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="10">
            <v-sheet min-height="70vh" rounded="lg">
              <Nuxt class="main-content" />
            </v-sheet>
          </v-col>

          <v-col v-if="!isMobile" sm="2">
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
    isMenuDrawn: false,
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
    isMobile() {
      const mobileBreakPoint = 600
      if (this.$vuetify.breakpoint.width < mobileBreakPoint) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>
