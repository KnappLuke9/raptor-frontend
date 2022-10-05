<template>
  <v-col cols="12" :md="(size = 4)">
    <v-card :height="450" color="grey lighten-1" dark NuxtLink :to="`/articles/${article.id}`">
      <v-img :src="coverImageUrl" height="100%" gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)">
        <v-row class="fill-height text-right ma-0">
          <v-col cols="12">
            <h3 class="title font-weight-bold mb-2">
              {{ article.attributes.title }}
            </h3>

            <div class="caption">Richard Cram<br />Date</div>
          </v-col>

          <v-col align-self="end">
          </v-col>
        </v-row>
      </v-img>
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