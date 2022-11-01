<template>
  <v-col cols="12" :md="(size = 3)" :sm="(size = 6)" :lg="(size = 3)">
    <v-card color="blue-grey lighten-4" NuxtLink :to="`/articles/${article.id}`">
      <v-img :src="coverImageUrl" height="100%" gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)">
      </v-img>
              <v-row class=" text-left ma-0">
          <v-col cols="12">
            <h3 class="title font-weight-bold mb-2">
              {{ article.attributes.title }}
            </h3>

            <h4>
              Some awesome short description about what this article is talking about. A nice little intro text.
            </h4>

            <div class="caption">Richard Cram<br/>Date</div>
          </v-col>

          <v-col align-self="end">
          </v-col>
        </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['article'],
  computed: {
    // computed property to obtain new absolute image URL
    coverImageUrl() {
      const imagePath = this.article.attributes.cover.data.attributes.formats.small.url
      return imagePath
    },
  },
}
</script>