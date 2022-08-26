<template>
  <li class="article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0">
    <header class=" col-start-3 col-end-8">
      <div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3">
        
        <!-- fetch media from strapi using the STRAPI_URL + relative image URL -->
        <img :src="coverImageUrl" alt="">
      </div>
      <NuxtLink :to="`/articles/${article.id}`"><h1 class="font-bold text-xl mb-2">{{article.attributes.Title}}</h1></NuxtLink>
    </header>
  </li>
</template>
<script>
  export default {
    props: ['article'],
    computed: {
      // computed property to obtain new absolute image URL
      coverImageUrl(){
        //const url = this.$store.state.url
        const url = "http://localhost:1337";
        //const imagePath = this.article.Image.data.attributes.url
        const imagePath = this.article.attributes.Image.data[0].attributes.formats.small.url //data[0] gives the first image in the array
        return url + imagePath
      },
    },
  }
</script>