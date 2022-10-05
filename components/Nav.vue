<template>
  <div >
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app disable-resize-watcher temporary>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app style="background-color: #263238">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            :ripple="false"
            class="font-weight-bold orange--text text--darken-2"
            min-width="96"
            text
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </div>
      <v-spacer />

      <!-- Put socials here -->
          <div class="social-icons-nav">
            <a href="https://www.facebook.com/RaptorsFloorballClub">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="https://twitter.com/RevoRaptors">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCQK1yC-IB69HvYeRTUo4gJA">
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="https://www.instagram.com/revoraptorsfc">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
      name: "DefaultLayout",
      data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Home",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "About",
                    to: "/about",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Articles",
                    to: "/articles",
                },
                // {
                //     icon: "mdi-chart-bubble",
                //     title: "Contact",
                //     to: "/contact",
                // },
                {
                    icon: "mdi-chart-bubble",
                    title: "Fixtures",
                    to: "/fixtures",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Gallery",
                    to: "/gallery",
                }
            ],
            miniVariant: false,
        };
    },
    computed: {
      title() { return this.$route.name }
    }
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