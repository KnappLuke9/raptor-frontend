<template>
  <div>
    <v-navigation-drawer color="#263238" v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app disable-resize-watcher temporary>
      <v-list color="#263238">
        <v-list-item class="font-weight-bold orange--text text--darken-2" v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app style="background-color: #263238">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <div>
        <v-tabs class="hidden-sm-and-down" optional background-color="transparent">
          <!-- <v-tab v-for="(item, i) in items" :key="i" :to="item.to" :ripple="false" class="font-weight-bold orange--text text--darken-2" min-width="96" text>
            {{ item.title }}
          </v-tab> -->
          <!-- <v-tab>
            <v-menu open-on-hover top offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="font-weight-bold orange--text text--darken-2" color="#263238" elevation="0" v-bind="attrs" v-on="on"> About </v-btn>
              </template>

              <v-list color="#263238">
                <v-list-item class="font-weight-bold orange--text text--darken-2" v-for="(item, index) in items" :key="index" :to="item.to" router exact>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-tab> -->
          <v-tab href="/" :ripple="false" class="font-weight-bold orange--text text--darken-2" min-width="96" text> Home </v-tab>
          <v-tab href="/articles" :ripple="false" class="font-weight-bold orange--text text--darken-2" min-width="96" text> Latest News </v-tab>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="pt-3 font-weight-bold orange--text text--darken-2" color="#263238" elevation="0" v-bind="attrs" v-on="on"> Fixtures and Resutls </v-btn>
            </template>

            <v-list color="#263238">
              <v-list-item class="font-weight-bold orange--text text--darken-2" to="/fixtures" router exact>
                <v-list-item-title>Fixtures</v-list-item-title>
              </v-list-item>
              <v-list-item class="font-weight-bold orange--text text--darken-2" to="/ladder" router exact>
                <v-list-item-title>Ladders</v-list-item-title>
              </v-list-item>
              <v-list-item class="font-weight-bold orange--text text--darken-2" to="/statistics" router exact>
                <v-list-item-title>Stats</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="pt-3 font-weight-bold orange--text text--darken-2" color="#263238" elevation="0" v-bind="attrs" v-on="on"> About </v-btn>
            </template>

            <v-list color="#263238">
              <v-list-item class="font-weight-bold orange--text text--darken-2" to="/floorball" router exact>
                <v-list-item-title>What is Floorball?</v-list-item-title>
              </v-list-item>
              <v-list-item class="font-weight-bold orange--text text--darken-2" to="/about" router exact>
                <v-list-item-title>About the Club</v-list-item-title>
              </v-list-item>
              <v-list-item class="font-weight-bold orange--text text--darken-2" to="/sponsorship" router exact>
                <v-list-item-title>Sponsorship</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-tab href="/gallery" :ripple="false" class="font-weight-bold orange--text text--darken-2" min-width="96" text> Gallery </v-tab>
        </v-tabs>
      </div>
      <v-spacer />

      <!-- Put socials here -->
      <div class="social-icons-nav">
        <a href="mailto:Bruce@spatialproperty.com.au">
          <i class="mdi mdi-mail"></i>
        </a>
        <a href="https://www.facebook.com/RaptorsFloorballClub" target="_blank">
          <i class="mdi mdi-facebook"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCQK1yC-IB69HvYeRTUo4gJA" target="_blank">
          <i class="mdi mdi-youtube"></i>
        </a>
        <a href="https://www.instagram.com/raptorsfloorball" target="_blank">
          <i class="mdi mdi-instagram"></i>
        </a>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Latest News',
          to: '/articles',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Fixtures',
          to: '/fixtures',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Ladders',
          to: '/ladder',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Statistics',
          to: '/statistics',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'What is Floorball?',
          to: '/floorball',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Sponsorship',
          to: '/sponsorship',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About the Club',
          to: '/about',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Gallery',
          to: '/gallery',
        },
      ],
      miniVariant: false,
    }
  },
  computed: {
    title() {
      return this.$route.name
    },
  },
}
</script>

<style scoped>
.ml-auto {
  margin-left: auto;
}
#intro {
  /* Margin to fix overlapping fixed navbar */
  margin-top: 58px;
}
@media (max-width: 991px) {
  #intro {
    /* Margin to fix overlapping fixed navbar */
    margin-top: 45px;
  }
}
</style>