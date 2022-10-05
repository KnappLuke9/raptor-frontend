<template>
  <v-app>
    <Nav />
    <v-main>
      <Nuxt />
    </v-main>
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
</style>

<style scoped>
  .sticky {
    position: sticky;
    top: 0px;
    z-index: 1;
  }
</style>