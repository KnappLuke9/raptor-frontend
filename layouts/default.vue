<template>
  <v-app>
    <Nav />
    <v-main>
      <Nuxt />
    </v-main>
    <v-navigation-drawer temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '../components/Nav.vue';
export default {
    name: "DefaultLayout",
    components: { Nav }
}
</script>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.css');
</style>

<style scoped>
  .sticky {
    position: sticky;
    top: 0px;
    z-index: 1;
  }
</style>