<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
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
                    title: "Welcome",
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
                {
                    icon: "mdi-chart-bubble",
                    title: "Contact",
                    to: "/contact",
                },
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
            right: true,
            rightDrawer: false,
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