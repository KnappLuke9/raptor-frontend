<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row class="pa-md-16 mx-lg-auto">
        <v-col v-for="article in articles" :key="article.id" class="pa-md-4 mx-lg-auto" cols="1" lg="3" sm="12">
          <v-card flat tile class="d-flex">
              <v-img :src="article.attributes.cover.data.attributes.formats.small.url" aspect-ratio="1" class="grey lighten-2" >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  //Async will block user nav until this call finishes.
  //We can show the user a load bar or something if we expect it to be a phat one
  async asyncData({ store }) {
    let articles = await store.dispatch('articles/getArticles')
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { articles }
  },
  data() {
    return {
      key: 'blah'
    }
  },
  mounted() {
  },
}
</script>


<style>

</style>