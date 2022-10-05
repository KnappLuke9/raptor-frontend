<template>
  <v-app>
    <v-img :src="`${article.attributes.cover.data.attributes.url}`" max-height="600"> </v-img>
    <main>
      <v-container class="px-md-16 mx-lg-auto">
        <div type="text" align="center" justify="center" readonly v-html="article.attributes.content"></div>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
//style="max-width: 1500px;"

  //Async will block user nav until this call finishes.
  //We can show the user a load bar or something if we expect it to be a phat one
  async asyncData({ store, route }) {
    let article = await store.dispatch('articles/getArticle', route.params.id)
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { article }
  },
  data() {
    return {
      key: 'blah',
    }
  },
  mounted() {},
  computed: {
    // computed property to obtain new absolute image URL
    coverImageUrl() {
      const imagePath = this.article.attributes.cover.data.attributes.formats.small.url
      return imagePath
    },
  },
}
</script>

<style></style>
