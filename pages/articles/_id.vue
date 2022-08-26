<template>
<v-row>
  <v-col>
  <!-- we will change the id to be like the name + something so users will see   /articles/raptorsWinGame vs /articles/123-3214345-7-4564564-1 -->
  <div>your article id is {{$route.params.id}}</div>
  <div>{{article}}</div>
  <img :src="coverImageUrl" alt="">
  </v-col>
</v-row>
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
      key: 'blah'
    }
  },
  mounted() {
  },
  computed: {
    // computed property to obtain new absolute image URL
    coverImageUrl(){
      //const url = this.$store.state.url
      const url = "http://localhost:1337";
      //const imagePath = this.article.Image.data.attributes.url
      const imagePath = this.article.attributes.Image.data[0].attributes.formats.small.url
      return url + imagePath
    }
  }
}
</script>

<style></style>
