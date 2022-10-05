<template>
  <v-container>
    <main class="pa-md-4 mx-lg-auto">
      <h2 class="text-center">Gallery</h2>
      <v-row class="pa-md-16 mx-lg-auto">
        <v-col v-for="image in images" :key="image.id" class="pa-md-4 mx-lg-auto" cols="12" lg="4" sm="6" xs="6">
          <v-card flat tile class="d-flex">
              <v-img :src="image.url" aspect-ratio="1" class="grey lighten-2" @click="toggleFullscreen(image.url)"/>
              <div v-if="selectedImage" class="overlay">
              <v-img
                class="mt-12"
                :src="selectedImage"
                alt=""
                height="95vh"
                contain
                dark
                @click.stop="selectedImage = null">
              </v-img>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </main>
  </v-container>
</template>


<script>
import axios from 'axios'

export default {
  //Async will block user nav until this call finishes.
  //We can show the user a load bar or something if we expect it to be a phat one
  async asyncData() {
    //let images = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/galleries/?populate=*')).data
    let images = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/upload/files')).data
    console.log(images)
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { images }
  },
  data() {
    return {
      key: 'blah',
            overlay: false,
      zIndex: 0,
            selectedImage: null,

    }
  },
  mounted() {
  },
    methods: {
    toggleFullscreen(elem) {
      this.selectedImage = elem;
    },
  },
}
</script>


<style>
.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
</style>