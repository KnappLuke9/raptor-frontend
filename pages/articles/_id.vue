<template>
  <div>
    <Nav />
    <container align="center" justify="center">
      <v-row>
        <v-img :src="`${article.attributes.cover.data.attributes.url}`" class="grey lighten-2" height="750px" width="1500px">
          <v-row class="fill-height pa-3" align="center">
            <v-col cols="12" md="7" offset-md="5">
              <h1 class="display-3 font-weight-light">The Art Of Travel</h1>

              <div class="subheading text-uppercase pl-2 mb-4">Finding Beauty, One flight at a time</div>

              <v-btn color="primary" depressed> Subscribe </v-btn>
            </v-col>
          </v-row>
        </v-img>
      </v-row>
      <v-row>
        <v-col>
          <div class="form-control" type="text" id="view-container-wiki" readonly v-html="article.attributes.content"></div>
          <div>{{ article }}</div>
          <img :src="coverImageUrl" alt="" />
        </v-col>
      </v-row>
    </container>
  </div>
</template>

<script>
export default {
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
