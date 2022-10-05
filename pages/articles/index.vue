<template>
  <v-container>
      <main class="pa-md-4 mx-lg-auto">
      <h2 class="text-center">Articles</h2>
      <v-row class="pa-md-16 mx-lg-auto">
      <article-card v-for="article in articles" :key="article.id" :article="article"/>
      </v-row>
    </main>
  </v-container>
</template>

<script>
export default {
  //Async will block user nav until this call finishes.
  //We can show the user a load bar or something if we expect it to be a phat one
  async asyncData({ store }) {
    let articles = await store.dispatch('articles/getArticles')
    //everthing you return from here is then available with this.article. It puts it into 'data'
    articles.reverse(); //strapi gives us the articles in order of first updated to last. We want to display the latest updated article
    // so we flip the array. probably want to sort it better later with an article date attribute
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