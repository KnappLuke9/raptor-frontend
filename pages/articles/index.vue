<template>
  <div>
    <v-container>
      <article-card v-for="article in articles" :key="article.id" :article="article"/>
    </v-container>
    <Footer />
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
      key: 'blah',
    }
  },
  mounted() {},
}
</script>


<style>
</style>